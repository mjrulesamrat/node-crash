// async await demo to read and write to files
const {readFile, writeFile} = require('fs')

// simplify the promise function with builtins
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFilePromise(
            './content/result-mind-boom.txt',
            `This is awesome: ${first} and ${second}`
            )
        console.log(first)
        console.log(second)
        
    } catch (error) {
        console.log(error)
    }
}

start()