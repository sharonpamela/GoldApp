const router = require("express").Router();
const usersController = require("../../Controllers/usersController");
// we're inside /api

router.route('/')
    .get(usersController.findAll)
    .post(usersController.create);

router.route("/buy")
    .post(usersController.buyButton);

router.route("/sell")
    .post(usersController.sellButton);

router.route('/user_bal')
    .get(usersController.fetchBalance);

router.get('/current_user', (req, res) => {
    res.send(req.user);
});


module.exports = router;