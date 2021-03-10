//Route to controller commands
const router = require("express").Router();
const groceryListController = require("../../controllers/groceryListController");

//Route to required method of controller
router.route("/all").get(groceryListController.getGroceryList);
router.route("/add").post(groceryListController.addToList);
router.route("/:id").delete(groceryListController.deleteOne);
router.route("/clear/list").delete(groceryListController.deleteAll);

//Export router
module.exports = router;
