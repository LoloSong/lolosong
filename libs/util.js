const fs = require('fs')

module.exports = {
  readFile (file) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  },

  writeFile (file, txt) {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, txt, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve('写入成功')
        }
      })
    })
  },
}