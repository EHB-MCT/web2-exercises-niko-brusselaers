const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/info.html')
})

app.get('/getdata', (req, res) => {
    let data = {
        name: "niko",
        age: "20",
        study: "MCT"
    }

    res.send(data)
})

app.get('/randomtext', (req, res) => {
    res.send(' a random string of your choosing')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})