
// Desestructuración 
// Asignación Desestructurante
const person = {
    name: 'Chris',
    age: 33,
    pass: 'krysza'
};

// const { name, pass, age } = person;

// console.log( name );
// console.log( age );
// console.log( pass );

const returnPerson= ({ pass, name, age, rank = 'Capitán '}) => {
    // console.log ( name, age, rank )
    return {
        passName: pass,
        anios: age,
        latlng: {
            lat: 14.688,
            lng: -12.662
        }
    }
}

const { passName, anios, latlng:{ lat, lng } } = returnPerson( person );

console.log( passName, anios );
console.log( lat, lng);