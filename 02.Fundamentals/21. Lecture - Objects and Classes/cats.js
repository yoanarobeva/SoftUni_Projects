function cats(arr) {
    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        }

        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }
    let catsArr = []
    for (let cat of arr) {
        let [catName, age] = cat.split(" ");
        let oneCat = new Cat(catName, age);
        oneCat.meow();
    }
    
}

cats(['Mellow 2', 'Tom 5']);