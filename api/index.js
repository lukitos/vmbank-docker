const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
// const tweet = require('./twitter');
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => {
   response.json({ info: 'Node.js, Express, and Postgres API in a VM' })
});

// DB Queries
app.get('/accounts', db.getAccounts);
app.get('/accounts/:account_num', db.getAccountById);
app.get('/transactions/:account_num', db.getTransactions);

// Twitter
// app.get('/tweets', tweet.getTweets);

app.listen(port, () => {
   console.log(`App running on port ${port}`);
});