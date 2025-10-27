interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: '12345',
        city: 'New York'
    }
};

console.log(ironman);