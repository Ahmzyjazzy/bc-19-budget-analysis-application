// Require package dependencies
const express = require('express'),
router = express.Router();

const app = express();

//setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// loading static files
app.use(express.static('assets'));

//loading route files
app.use(require('./routes'));

app.listen(4000, () => {
  console.log('Listening on port 4000!')
})