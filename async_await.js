// async await demo to read and write to files
const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile(
            './content/result-mind-boom.txt',
            `This is awesome, legendary: ${first} and ${second}`
            )
        console.log(first)
        console.log(second)
        
    } catch (error) {
        console.log(error)
    }
}

start()