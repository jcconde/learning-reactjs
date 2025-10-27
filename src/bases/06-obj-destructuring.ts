const person = {
    name: 'Peter',
    age: 30,
    key: 'Ironman'
};

// version 1
// const name = person.name;
// const age = person.age;
// const key = person.key;
// console.log({name, age, key});


// version 2
const {name: heroName, age, key} = person;
console.log({heroName, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string | undefined;
}

const useContext = ({ key, name, age, rank}: Hero) => {
    // const {name, age, key} = hero;
    return {
        keyName: key,
        user:  {
            name,
            age
        },
        rank: rank,
    }
}

const context = useContext(person);
console.log(context);

const useContext2 = ({ key, name, age, rank = 'sin rango'}: Hero) => {
    // const {name, age, key} = hero;
    return {
        keyName: key,
        user:  {
            name,
            age
        },
        rank: rank,
    }
}

const {rank, keyName, user: {name}} = useContext2(person);
console.log({rank, keyName, name});

