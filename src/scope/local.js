const helloWorld = () => {
    const hello = "Hello world";
    console.log(hello);
}

helloWorld();
console.log(hello);

var scope = "I'm global";

const functionScope = () => {
    var scope = "I am just a local";
    const func = () => scope;
    console.log(func());
}

functionScope();

