const express = require('express');
const router = express.Router();

//dashboard
router.get('/', (req, res) => {
	res.render('dashboard');
});

//budget page
router.get('/budget', (req, res) => {
	res.render('budget', {error: null});
});

//view-budget page
router.get('/view-budget', (req, res) => {
	res.render('view-budget');
});

//record-expenses page
router.get('/record-expenses', (req, res) => {
	res.render('expenses', {error: null});
});

//view-expenses page
router.get('/view-expenses', (req, res) => {
	res.render('view-expenses');
});

//view-expenses page
router.get('/report', (req, res) => {
	res.render('report');
});

module.exports = router;