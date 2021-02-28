//Route to controller commands
const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

//Route to required method of controller
router.route("/").get(recipeController.getAll);

//Export router
module.exports = router;
