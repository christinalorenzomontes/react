
const person = {
    name: 'Christina',
    surname: 'Lorenzo',
    age: 33,
    addres: {
        city: 'Malaga',
        zip: 29001,
        lat: 36.721273,
        long: -4.421398,
    }
};

// console.table( person )

const person2 = { ...person }
person2.name = 'Paula';

console.log( person );
console.log( person2 );