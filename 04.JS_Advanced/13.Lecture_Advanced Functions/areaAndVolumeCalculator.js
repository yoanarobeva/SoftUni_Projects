function solve(areaF, volF, input) {
    let objects = JSON.parse(input);
    
    function calculate(obj) {
        let area = areaF.call(obj);
        let volume = volF.call(obj);

        return {
            area,
            volume
        }
    }

    return objects.map(calculate)
}

console.table(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`))

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
