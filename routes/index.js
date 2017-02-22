const express = require('express');
const router = express.Router();

//home page
router.get('/', (req, res) => {
  res.render('index');
});

//dashboard
router.get('/dashboard', (req, res) => {
  res.render('./dashboard');
});

//budget page
router.get('/budget', (req, res) => {
	res.render('./budget');
});

//view-budget page
router.get('/view-budget', (req, res) => {
	res.render('./view-budget');
});

//record-expenses page
router.get('/record-expenses', (req, res) => {
	res.render('./expenses');
});

//view-expenses page
router.get('/view-expences', (req, res) => {
	res.render('./view-expenses');
});

//view-expenses page
router.get('/report', (req, res) => {
	res.render('./report');
});

//register page
router.get('/register', (req, res) => {
	res.render('./register');
});

module.exports = router;