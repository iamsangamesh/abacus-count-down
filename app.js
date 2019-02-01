const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

const privateKey = fs.readFileSync('/etc/letsencrypt/live/abacus.org.in/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/abacus.org.in/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/abacus.org.in/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('home')
})


const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
        console.log('HTTPS Server running on port 443');
});
httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
