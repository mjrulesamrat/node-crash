// built-in modules from node source
// http, fs, os, stream, path
const os = require('os')

console.log(os.freemem())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()
}

// it works this way as well!
console.log(currentOS)
console.log(currentOS.name)