const greet = (first, last, callback) => {
    console.log(`Hi ${first} ${last}`, typeof first, typeof last, typeof callback)
    if (typeof callback !== 'function') throw 'C`mon, give me a function'
    callback();
    console.log('This is a very important piece of logic')
}
module.exports = greet;