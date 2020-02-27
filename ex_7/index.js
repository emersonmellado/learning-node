const greet = require('./greeter')

const callbackFunction = () => console.log('Hello from callback')

greet('Johnny', 'B.Goode', callbackFunction)

//We can also call the function here
callbackFunction();