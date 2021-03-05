//Route to controller commands
const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");

//Route to required method of controller
router.route("/new").post(ingredientController.createNew);
router.route("/all").get(ingredientController.getAll);
router.route("/match").post(ingredientController.matchIngredient);

//Export router
module.exports = router;
