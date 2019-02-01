var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(80)
//app.listen(443)
