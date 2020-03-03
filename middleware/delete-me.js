const greet = (f, l, fn) => {
    console.log(`Hi ${f} ${l}`);
    fn();
}
const callbackFunction = () => {
    console.log("I am a callback function, nice to meet you")
}
greet('John', 'Rambo', callbackFunction)