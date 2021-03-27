// async await demo to read and write to files
const {readFile} = require('fs')
// const util = require('util')

// create a promise first and then call them with async, await
const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=> {
            if (err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

const start = async() => {
    try {
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first)
        console.log(second)
        
    } catch (error) {
        console.log(error)
    }
}

start()