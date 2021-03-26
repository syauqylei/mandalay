const express = require('express');
const session = require('express-session');
const userChecking = require('./helpers/userChecking.js');
const router = require('./routes');
const app = express();
const port = 3000;

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: 'mandalaybro',
  resave: false,
  saveUninitialized: true,
}));

app.use('/',router)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
