const numbers = [1, 3, 5, 6, 2, 4, 9, 10];

const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 17, height: 120 },
    { name: 'Tun', age: 13, height: 180 },
    { name: 'Tuan', age: 15, height: 110 },
];
// const index = people.findIndex(person => person.age > 12);
// console.log(index);
// people.splice(index, 1);
// console.log(people);

// console.log(people.find(person => person.age > 12));
// console.log(people.some(person => person.age > 18));
// console.log(people.every(person => person.age > 10));
// console.log(people.map(person => person.age).reduce((a, b) => a + b));
// console.log(numbers.sort((a, b) => a - b));
console.log(people.sort((a, b) => a.age - b.age));
