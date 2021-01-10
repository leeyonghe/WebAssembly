const express = require('express')
const app = express()
const path = require("path");
const port = 8000
const ejs = require('ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
  ejs.renderFile(path.resolve(__dirname,'./public/views/main.html'), null, null, (err, str) => !err && res.send(str))
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})