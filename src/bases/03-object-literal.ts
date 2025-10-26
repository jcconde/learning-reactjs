const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 30,
    address: {
        postalCode: '12345',
        city: 'New York'
    }
};

// apuntan a la misma memoria
// const spiderman = ironman;

// copia la memoria
// const spiderman = { ...ironman };

const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.postalCode = '54321';
spiderman.address.city = 'Los Angeles';

console.log(ironman, spiderman);