const active = true;

// let message = '';

// if ( active ) {
//     message = 'Active';
// } else {
//     message = 'No active';
// }

// const message = ( active ) ? 'Active' : 'No active';
// const message = ( active ) ? 'Active' : null;
const message = active && 'Active' || 'No active';

console.log(message);