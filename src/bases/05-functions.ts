function greet(name: string): string {
    return `Hello ${name}`;
}

const message = greet(`Goku`);
console.log(message);

const greet2 = (name: string): string => {
    return `Hello ${name}`;
}

const greet3 = (name: string): string => `Hello ${name}`;

console.log(greet2('Goku'));
console.log(greet3('Goku'));


interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'papi123',
    }
}

const getUser2 = (): User => {
    return {
        uid: 'ABC-123',
        username: 'papi123',
    }
}

const getUser3 = (): User => ({
    uid: 'ABC-123',
    username: 'papi123',
});

const myNumbers = [1, 2, 3, 4, 5];
// version 1
myNumbers.forEach(function (number) {
    console.log(number);
});
// version 2
myNumbers.forEach((number) => {
    console.log({number});
});
// version 3
myNumbers.forEach(console.log);