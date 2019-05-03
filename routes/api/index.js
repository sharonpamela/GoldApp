const router = require("express").Router();
const usersController = require("../../Controllers/usersController");
// we're inside /api

// "/api/users"
router.route('/')
    .get(usersController.findAll)
    .post(usersController.create);

router.route("/buy")
    .post(usersController.buyButton);

router.route("/sell")
    .post(usersController.sellButton);

router.route('/user_bal')
    .get(usersController.fetchBalance);


// // "/api/currentUser"
router.get('/current_user', (req, res) => {
    console.log(req.user);
    res.send(req.user);
});




// "/api/logout"
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });

module.exports = router;