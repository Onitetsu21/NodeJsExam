const express = require("express")
const router = express.Router()
const userStoryController = require("../controllers/userStoryController")


////////////ALL//////////////

router.get("/:id", userStoryController.all);


////////////CREATE//////////////

router.get("/create/:id", userStoryController.createGet)
router.post("/create", userStoryController.createPost)


////////////UPDATE//////////////

router.get("/update/:id", userStoryController.updateGet)
router.post("/update", userStoryController.updatePost)


////////////DELETE//////////////

router.get("/delete/:id", userStoryController.deleteGet)
router.post("/delete", userStoryController.deletePost)

module.exports = router