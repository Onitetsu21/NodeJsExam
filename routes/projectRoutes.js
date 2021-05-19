const express = require("express")
const router = express.Router()
const Project = require("../models/project");
const projectController = require("../controllers/projectController")


////////////ALL//////////////

router.get("/projects", projectController.all);


////////////CREATE//////////////

router.get("/projects/create", projectController.createGet)

router.post("/projects/create", projectController.createPost)


////////////UPDATE//////////////

router.get("/projects/update/:id", projectController.updateGet)

router.post("/projects/update", projectController.updatePost)


////////////DELETE//////////////

router.get("/projects/delete/:id", projectController.deleteGet)

router.post("/projects/delete", projectController.deletePost)

module.exports = router