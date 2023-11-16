import { heroines } from '../data/heroines'

// const heroineById = heroines.find((heroine) => heroine.id === 2);

export const getHeroineById = (id) => {
    return heroines.find((heroine) => heroine.id === id);
}
// console.log(getHeroineById(3));

// const getHeroinByOwner = (owner) => heroines.find((heroine) => heroine.owner === owner);
// console.log(getHeroinByOwner('DC'));


export const getHeroinByOwner = (owner) => heroines.filter((heroine) => heroine.owner === owner);
// console.log(getHeroinByOwner('DC'));