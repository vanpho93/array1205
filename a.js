const numbers = [1, 3, 5, 6, 2, 4, 9];

const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 17, height: 120 },
    { name: 'Tun', age: 13, height: 180 },
    { name: 'Tuan', age: 15, height: 110 },
];

Array.prototype.myFilter = function(fn) {
    const output = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (fn(element)) output.push(element);
    }
    return output;
}
// numbers.myMap()
// const arr = numbers.map(x => x * x);
// const arrAge = people.map(person => person.age);

// const arrEven = numbers.filter(x => x % 2 === 0);
const arrElder = people.myFilter(person => person.age > 14);
console.log(arrElder);
