const firebase = require('../helpers/firebase.js');
let db = firebase.database(),
    ref = db.ref('budget'),
    fire_base = firebase.auth(),
    budgetRef = ref.child('details');

module.exports.save_budget = (req, res) => {
    //get data from DOM
    // getDOM();
    let budget_month = req.body.month,
        paychecks = req.body.paychecks,
        other_sources = req.body.other_sources,
        rent = req.body.rent,
        utilities = req.body.utilities,
        insuarance = req.body.insuarance,
        groceries = req.body.groceries,
        health = req.body.health,
        entertainment = req.body.entertainment,
        restaurant_bar = req.body.restaurant_bar,
        personal_care = req.body.personal_care,
        service_charges = req.body.service_charges,
        shopping = req.body.shopping,
        gifts = req.body.gifts,
        travel = req.body.travel,
        other = req.body.other,
        userId;

    fire_base.onAuthStateChanged(user => {
        userId = user.uid;

        if(user) {
            budgetRef.child('/' + userId).push({
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
        })
        .then((user) => {
                res.redirect('/dashboard/view-budget');
            })
            .catch((err) => {
                let errorCode = err.code;
                let errorMessage = err.message;
                return res.render('/dashboard/budget', {error: errorMessage});
            });
        }
    })
}