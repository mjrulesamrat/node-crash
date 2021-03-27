const {readFile} = require('fs')


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

getText('./content/first.txt')
    .then((result)=>{
        console.log(result)
    })
    .catch((err)=> {
        console.log(err)
    })

// Promises
/*

return new Promise((resolve, reject)=> {
    function(err, data)
    all good -> resolve(data)
    not good -> reject(err)
})

const.then(data).catch(err)

*/