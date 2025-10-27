const useState = (name: string) => {
    return [
        name,
        (value: string) => console.log(value)
    ] as const;
};

const [name, setName] = useState('Goku');

console.log(name);
setName('Vegeta');