import {heroes, type Hero} from '../data/heroes.data.ts';

// version 1
const getHeroesByID = (id: number): Hero|undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    return hero;
};

// version 2
// const getHeroesByID = (id: number): Hero => {
//     const hero = heroes.find((hero) => {
//         return hero.id === id;
//     });
//
//     if (!hero) {
//         throw new Error(`Hero with id ${id} not found`);
//     }
//
//     return hero;
// };

console.log(getHeroesByID(4));