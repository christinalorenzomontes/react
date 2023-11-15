
// Desestructuración con arrays

const characters = ['Sailor Moon', 'Sailor Venus', 'Sailor Jupiter'];
const [ , , p3 ] = characters;
console.log( p3 );

const returnArray = () => {
    return ['ABC', 123];
}

const [ letters, numbers ] = returnArray();
console.log(letters, numbers)

// Task
const returnCharacter = ( value ) => {
    return [ value, ()=>{console.log('Hello Word')} ];
}

const arr = returnCharacter('Sailor Moon');
console.log(arr);
const [ name, setName ] = returnCharacter('Sailor Moon');;

console.log(name);
setName();