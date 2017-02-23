// Require package dependencies
const express = require('express'),
router = express.Router(),
bodyParser = require('body-parser'),
dotenv = require('dotenv').config(),
auth = require('./controllers/auth.js'),
saveBudget = require('./controllers/budget.js'),
saveExpenses = require('./controllers/expenses.js');
// flash = require('connect-flash');

//initalize express
const app = express();

let port = process.env.PORT || 4000;

//home page route
app.get('/', (req, res) => {
  res.render('index', {error: null});
  
});

//register page
app.get('/register', (req, res) => {
	res.render('register', {error: null});
});


//setting up view engine
app.set('views', process.cwd() + '/views');
app.set('view engine', 'ejs');

// loading static files
app.use(express.static('assets'));

//use `body-parser` to grab form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//getting post data
app.post('/register', auth.register);
app.post('/', auth.login);
app.get('/signOut', auth.signOut);
app.post('/save_budget', saveBudget.save_budget);
app.post('/save_expenses', saveExpenses.save_expenses);
app.get('/google', auth.google);

//route dashboard pages
app.use('/dashboard', (req, res, next) => {
  next()
}, require('./routes/dashboard.js'));

app.listen(port, () => {
  console.log('Server running on ' + port);
})