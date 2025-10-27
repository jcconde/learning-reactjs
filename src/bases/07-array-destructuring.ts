// version 1
// const characterNames = ['Goku', 'Vegeta', 'Trunks'];
// const [goku, vegeta, trunks] = characterNames;
// console.log({goku, vegeta, trunks});


// version 2
// const characterNames = ['Goku', 'Vegeta', 'Trunks'];
// const [, , trunks] = characterNames;
// console.log({trunks});


// agrega "as const", le dice que siempre será un readonly
const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(numbers + 100);

