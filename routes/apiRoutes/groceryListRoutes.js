//Route to controller commands
const router = require("express").Router();
const groceryListController = require("../../controllers/groceryListController");

//Route to required method of controller
router.route("/add").post(groceryListController.addToList);

//Export router
module.exports = router;
