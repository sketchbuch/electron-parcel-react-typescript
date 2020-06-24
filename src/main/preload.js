const fs = require('fs')
const path = require('path')

window.node = {
  readdirSync: fs.readdirSync,
  readFileSync: fs.readFileSync,
}