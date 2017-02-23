const firebase = require('../helpers/firebase.js');
let db = firebase.database(),
    ref = db.ref('budget'),
    fire_base = firebase.auth(),
    budgetRef = ref.child('details');

module.exports.save_budget = (req, res) => {
    //get data from DOM
    // getDOM();
    let budget_month = req.body.month;
    let paychecks = req.body.paychecks;
    let other_sources = req.body.other_sources;
    let rent = req.body.rent;
    let utilities = req.body.utilities;
    let insuarance = req.body.insuarance;
    let groceries = req.body.groceries;
    let health = req.body.health;
    let entertainment = req.body.entertainment;
    let restaurant_bar = req.body.restaurant_bar;
    let personal_care = req.body.personal_care;
    let service_charges = req.body.service_charges;
    let shopping = req.body.shopping;
    let gifts = req.body.gifts;
    let travel = req.body.travel;
    let other = req.body.other;

    budgetRef.push({
        budget_month,
        income: {
            paychecks,
            other_sources
        },
        fixed_costs: {
            rent,
            utilities,
            insuarance
        },
        flex: {
            groceries,
            health,
            entertainment,
            restaurant_bar,
            personal_care,
            service_charges,
            shopping,
            gifts,
            travel,
            other
        }
    }).then((user) => {
            res.redirect('/dashboard/view-budget');
        })
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            return res.render('/dashboard/budget', {error: errorMessage});
        });
}