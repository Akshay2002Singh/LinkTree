// const mongoose = require('mongoose');
const fs = require('fs');
const mongoose = require('mongoose')
const path = require('path');
const uri = fs.readFileSync(path.join(__dirname, 'uri.txt'), 'utf8');

console.log(uri)

async function main() {
  await mongoose.connect(uri).catch((e) => {
    console.log("Error in connection with database")
  })
}

module.exports = main