//Route to controller commands
const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

//Route to required method of controller
router.route("/all").get(recipeController.getAll);
router.route("/new").post(recipeController.createNew);

//Export router
module.exports = router;
