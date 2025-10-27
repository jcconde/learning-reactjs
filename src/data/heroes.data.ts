// v1
// type Owner = 'DC' | 'Marvel';
// v2
// enum Owner {
//     DC, // 0
//     Marvel, // 1
// }
// v3
enum Owner {
    DC = 'DC',
    Marvel = 'Marvel'
}

interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  }
];

console.log(heroes);