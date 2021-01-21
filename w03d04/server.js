const bcrypt = require('bcryptjs');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 9876;

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cookieSession({
  name: 'w3d4-lecture',
  keys: ['secret things', 'more secret things', 'chicken']
}));
app.use(methodOverride('_method'));

// app.use((req, res, next) => {
//   req.method // POST
//   req.method = req.query._anything // PATCH
// });

app.set('view engine', 'ejs');

// user database
const users = {
  jstamos: {
    username: 'jstamos',
    password: '1234'
  },
  alice: {
    username: 'alice',
    password: '5678'
  }
};

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  return res.render('register');
});

app.get('/protected', (req, res) => {
  // const username = req.cookies.username;
  const username = req.session.username; // thanks, jstamos, alice
  if (!username) {
    return res.redirect('/login');
  }

  const user = users[username];
  if (!user) {
    return res.redirect('/register');
  }

  res.render('protected', { user });
});

app.get('*', (req, res) => {
  res.redirect('/login');
});

app.patch('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users[username];
  if (!user) {
    return res.status(401).send('No user with that username found');
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (!result) {
      return res.status(401).send('Password incorrect');
    }

    // res.cookie('username', user.username);
    req.session.username = user.username;
    res.redirect('/protected');
  });
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {

      users[username] = {
        username,
        password: hash
      };

      console.log(users);

      res.redirect('/login');

    });
  });
});

app.post('/logout', (req, res) => {
  // res.clearCookie('username');
  req.session = null;
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
