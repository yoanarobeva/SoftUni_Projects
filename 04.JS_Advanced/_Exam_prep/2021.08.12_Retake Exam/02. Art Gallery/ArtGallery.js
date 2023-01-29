class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!")
        }
        let isPresent = false;
        for (let el of this.listOfArticles) {
            if (el.articleName === articleName) {
                isPresent = true;
                if(el.articleModel === articleModel) {
                    el.quantity += quantity;
                }
            }
        }

        if (!isPresent) {
            this.listOfArticles.push({articleModel, articleName, quantity});
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest ( guestName, personality) {
        let isPresent = false;
        for (let el of this.guests) {
            if (el.guestName === guestName) {
                isPresent = true;
                throw new Error (`${guestName} has already been invited.`);
            }
        }

        if (!isPresent) {
            let points = {Vip: 500, Middle: 250};
            this.guests.push({guestName, points: points[personality] ? points[personality] : 50, purchaseArticle: 0});
        }

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName) {
        let isPresent = false
        let isThereThisGuest = false;

        for (let el of this.listOfArticles) {

            if (el.articleName === articleName) {
                isPresent = true;
                if (el.articleModel !== articleModel) {
                    throw new Error ("This article is not found.");
                }

                if (this.possibleArticles.hasOwnProperty(articleModel)) {
                    if (el.quantity === 0) {
                        return `The ${articleName} is not available.`
                    }

                    for (let guest of this.guests) {
                        if (guest.guestName === guestName) {
                            isThereThisGuest = true;
                            let articlePoint = this.possibleArticles[el.articleModel]

                            if (guest.points >= articlePoint) {
                                guest.points -= articlePoint;
                                el.quantity--;
                                guest.purchaseArticle++;
                                return `${guestName} successfully purchased the article worth ${articlePoint} points.`;
                            } else {
                                return "You need to more points to purchase the article.";
                            }
                        }
                    }
                }
            }
        }

        if (!isThereThisGuest) {
            return "This guest is not invited."
        }

        if (!isPresent) {
            throw new Error ("This article is not found.");
        }
    }

    showGalleryInfo (criteria) {
        if (criteria === 'article') {
            let text = "Articles information:";
            this.listOfArticles.forEach(x => text += `\n${x.articleModel} - ${x.articleName} - ${x.quantity}`)
            return text;
        } else if (criteria === 'guest') {
            let text2 = "Guests information:";
            this.guests.forEach(x => text2 += `\n${x.guestName} - ${x.purchaseArticle}`);
            return text2;
        }
    }
}

let art = new ArtGallery("Curtis Mayfield");

console.log(art.addArticle('picture', 'Mona Liza', 3));
console.log(art.addArticle('Item', 'Ancient vase', 2));
console.log(art.addArticle('picture', 'Mona Liza', 1));

console.log(art.inviteGuest('John', 'Vip'));
console.log(art.inviteGuest('Peter', 'Middle'));
console.log(art.buyArticle('picture', 'Mona Liza', 'John'));
console.log(art.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(art.buyArticle('item', 'Mona Liza', 'John'));