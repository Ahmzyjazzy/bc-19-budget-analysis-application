const firebase = require('../helpers/firebase.js');
let db = firebase.database(),
    ref = db.ref('expenses'),
    fire_base = firebase.auth(),
    expensesRef = ref.child('details');

module.exports.save_expenses = (req, res) => {
    //get data from DOM
    let flex_item = req.body.flex_item,
        amount_spent = req.body.amount_spent,
        userId;
    
    fire_base.onAuthStateChanged(user => {
        userId = user.uid;

        if(user) {
            expensesRef.child('/' + userId).push({
            flex_item,
            amount_spent
        })
        .then((user) => {
                res.redirect('/dashboard/view-expenses');
            })
            .catch((err) => {
                let errorCode = err.code;
                let errorMessage = err.message;
                return res.render('/dashboard/expenses', {error: errorMessage});
            });
        }
    })
}