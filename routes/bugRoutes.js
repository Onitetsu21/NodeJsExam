const express = require("express")
const router = express.Router()
const bugController = require("../controllers/bugController")


////////////ALL//////////////

router.get("/:id", bugController.all);


////////////CREATE//////////////

router.get("/create/:id", bugController.createGet)
router.post("/create", bugController.createPost)


////////////UPDATE//////////////

router.get("/update/:id", bugController.updateGet)
router.post("/update", bugController.updatePost)


////////////DELETE//////////////

router.get("/delete/:id", bugController.deleteGet)
router.post("/delete", bugController.deletePost)

module.exports = router