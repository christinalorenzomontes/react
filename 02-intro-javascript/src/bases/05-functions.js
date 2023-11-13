
// Funciones en JS
// const sayHi = function( name ) {
//  return `Hola, ${ name }`:
// }

const sayHi2 = ( name ) => {
    return `Hola, ${ name }`;
}

const sayHi3 = ( name ) => `Hola, ${ name }`;
const sayHi4 = () => `Hola Mundo`;

// console.log( sayHi('Goku') ); 

console.log( sayHi2('Vegeta') );
console.log( sayHi3('Goku') );
console.log( sayHi4() );

const getUser = () => ({
    uid: 'ABC123',
    username: 'Mami_Shula'
});

const user = getUser();
console.log(user);

const getActiveUser = ( name ) => ({
    uid: 'ABC567',
    username: name
});

const activeUser = getActiveUser('Christina');

console.log( activeUser );