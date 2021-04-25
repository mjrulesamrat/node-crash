const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Received Data user ${name} and id ${id}`)
})

customEmitter.on('response', () => {
    console.log('Received another event')
})

customEmitter.emit('response', 'Jay', 1004767543)
customEmitter.emit('response')
