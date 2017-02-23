const firebase = require('../helpers/firebase.js');
let db = firebase.database(),
    ref = db.ref('expenses'),
    fire_base = firebase.auth(),
    expensesRef = ref.child('details');

module.exports.get_expenses = (req, res) => {

    let user = fire_base.currentUser;
    if (user) {
        // User is signed in.
        let userId = user.uid;
        expensesRef.child('/' + userId).on('value', (data) => {
            let obj = data.val();
            res.render('view-expenses', {expenses: obj});
        }, (err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            console.log(err);
            res.redirect('/dashboard/expenses')
        });
    }
}