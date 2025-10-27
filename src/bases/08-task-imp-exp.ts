import {heroes, type Hero, Owner} from '../data/heroes.data.ts';

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const heroesByOwner: Hero[] = heroes.filter(
        hero => hero.owner === owner
    );

    return heroesByOwner;
};

console.log(getHeroesByOwner(Owner.DC));
