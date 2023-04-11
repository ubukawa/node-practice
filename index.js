const config = require('config')

const v = config.get('value')
const t = config.get('text')

console.log(`${v} and ${t}.`)

