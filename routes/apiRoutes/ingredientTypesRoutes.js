//Route to controller commands
const router = require("express").Router();
const ingredientTypeController = require("../../controllers/ingredientTypeController");

//Route to required method of controller
router.route("/all").get(ingredientTypeController.getAll);

//Export router
module.exports = router;
