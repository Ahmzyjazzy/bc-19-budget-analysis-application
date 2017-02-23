const firebase = require('../helpers/firebase.js');
let db = firebase.database(),
    ref = db.ref('budget'),
    fire_base = firebase.auth(),
    budgetRef = ref.child('details');

module.exports.save_budget = (req, res) => {
    //get data from DOM
    let budget_month = req.body.month,
        income_paychecks = req.body.paychecks,
        income_other_sources = req.body.other_sources,
        fc_rent = req.body.rent,
        fc_utilities = req.body.utilities,
        fc_insuarance = req.body.insuarance,
        flex_groceries = req.body.groceries,
        flex_health = req.body.health,
        flex_entertainment = req.body.entertainment,
        flex_restaurant_bar = req.body.restaurant_bar,
        flex_personal_care = req.body.personal_care,
        flex_service_charges = req.body.service_charges,
        flex_shopping = req.body.shopping,
        flex_gifts = req.body.gifts,
        flex_travel = req.body.travel,
        flex_other = req.body.other,
        userId;

    fire_base.onAuthStateChanged(user => {
        if(user) {
            //get user userId
            userId = user.uid;

        budgetRef.child('/' + userId).push({
            budget_month,
            income_paychecks,
            income_other_sources,
            fc_rent,
            fc_utilities,
            fc_insuarance,
            flex_groceries,
            flex_health,
            flex_entertainment,
            flex_restaurant_bar,
            flex_personal_care,
            flex_service_charges,
            flex_shopping,
            flex_gifts,
            flex_travel,
            flex_other
        })
        .then((user) => {
                console.log('fadf');
                res.redirect('/dashboard/view-budget');
            })
            .catch((err) => {
                console.log('catch');
                let errorCode = err.code;
                let errorMessage = err.message;
                return res.render('/dashboard/budget', {error: errorMessage});
            });
        }
    })
}