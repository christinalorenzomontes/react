import { getHeroineById } from './bases/08-imp-exp'

// const promise = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         const heroine = getHeroineById(2);
//         resolve(heroine)
//         // reject( 'We couldnt find the heroine' );
//     }, 2000)

// });

// promise.then( (heroine) => {
//     console.log('heroine', heroine)
// })
// .catch( error => console.warn( error ))

const getHeroineByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const heroine = getHeroineById( id );
            if ( heroine ) {
                resolve(heroine)
            } else {
                reject( 'We couldnt find the heroine' );
            }
        }, 2000)
    });

}

// getHeroineByIdAsync(1)
//     .then( heroine => console.log('Heroine', heroine))
//     .catch( error => console.warn( error ))

getHeroineByIdAsync(1)
    .then( console.log )
    .catch( console.warn )