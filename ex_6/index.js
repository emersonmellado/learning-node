const greet = (first, last, callback) => {
    console.log(`Hi ${first} ${last}`, typeof first, typeof last, typeof callback)
    if (typeof callback !== 'function') throw 'C`mon, give me a function'
    callback();
    console.log('This is a very important piece of logic')
}
const callbackFunction = () => console.log('This code gets executed after the greet function call');

try {
    greet('John', 'Rambo', callbackFunction)
} 
catch(error){
    console.log("Ohh snap, we have an error: ", error)
}
finally {
    console.log('I`ll run, you like it or not')
}