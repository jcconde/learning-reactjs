const myArray: number[] = [1,2,3,4,5,6];

myArray.push(10);
myArray.push(11);

// console.log(myArray);
//
// for (const myNumber of myArray) {
//     console.log(myNumber + 10);
// }

// const myArray2 = [...myArray];
// myArray2.push(12);
// console.log(myArray, myArray2)y;

const myArray2 = structuredClone(myArray);
myArray2.push(12);
console.log(myArray, myArray2);

