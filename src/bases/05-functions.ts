function greet(name: string): string {
    return `Hello ${name}`;
}

// const message = greet(`Goku`);
// console.log(message);

const greet2 = (name: string): string => {
    return `Hello ${name}`;
}

console.log(greet2('Hello World'));