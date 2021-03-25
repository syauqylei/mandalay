const express = require('express');
const session = require('express-session');
const userChecking = require('./helpers/userChecking.js');
const app = express();
const port = 3000;

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: 'mandalaybro',
  resave: false,
  saveUninitialized: true,
}));

app.get('/', (req, res) => {
  res.render('home')
})
app.post('/', userChecking, (req, res) => {
  console.log(req.session);
})

app.get('/readers/:username', (req,res) => {
  const userData  = req.session.user;
  res.render('users',{userData});
})

app.get('/readers/:username/logout', (req,res) => {
  req.session.destroy();
  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
