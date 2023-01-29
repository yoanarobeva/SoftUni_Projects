function getArticleGenerator(articles) {
    
    function showNext() {
        if (articles.length > 0) {
            let el = articles.shift();
            let article = document.createElement('article');
            let newEl = document.getElementById('content').appendChild(article);
            newEl.textContent = el;
            return articles;
        }
    }
    return showNext;
}
