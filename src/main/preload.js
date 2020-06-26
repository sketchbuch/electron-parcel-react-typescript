const fs = require('fs')
const path = require('path')

window.node = {
  fs: {
    readdirSync: fs.readdirSync,
    readFileSync: fs.readFileSync,
  }
}