const firebase = require('../helpers/firebase.js');
let db = firebase.database(),
    ref = db.ref('budget'),
    fire_base = firebase.auth(),
    budgetRef = ref.child('details');

module.exports.get_report = (req, res) => {
    let user = fire_base.currentUser;
    if (user) {
        // User is signed in.
        let userId = user.uid;
        budgetRef.child('/' + userId).on('value', (data) => {
            let obj = data.val();
            res.render('report', {budget: obj});
        }, (err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            console.log(err);
            res.redirect('/dashboard')
        });
    }
}