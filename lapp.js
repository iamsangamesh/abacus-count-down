var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(4000, (err) => {
    if (err) throw err
    console.log('App runs on http://localhost:4000')
})