const numbers = [1, 3, 5, 6, 2, 4, 9];

const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 17, height: 120 },
    { name: 'Tun', age: 13, height: 180 },
    { name: 'Tuan', age: 15, height: 110 },
];

const index = people.findIndex(person => person.age > 12);
console.log(index);
people.splice(index, 1);
console.log(people);
