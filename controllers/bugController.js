const Bug = require("../models/bug");

const all = (request, response) => {
    Bug.find({ projectId: request.params.id })
        .sort({priority : -1})
        .then((bugs) =>
            response.render("bugs", { bugs: bugs })
        )
        .catch((error) => console.log(error));
}

////////////CREATE//////////////

const createGet = (request, response) => {
    response.render("bugs/create", { projectId: request.params.id });
}

const createPost = (request, response) => {
    Bug.create(request.body)
        .then(() => response.redirect("/projects"))
        .then((error) => console.log(error));
}

////////////UPDATE//////////////

const updateGet = (request, response) => {
    const id = request.params.id;
    Bug.findById(id)
        .then((bug) =>
            response.render("bugs/update", { bug: bug })
        )
        .catch((error) => console.log(error));
}

const updatePost = (request, response) => {
    const bug = request.body;
    Bug.findByIdAndUpdate(bug._id, {
        title: String,
        reproSteps: String,
        priority: Number,
        projectId: ObjectId
    })
        .then(() => response.redirect("/projects"))
        .catch((error) => console.log(error));
}

////////////DELETE//////////////

const deleteGet = (request, response) => {
    const id = request.params.id;
    response.render("bugs/delete", { _id: id });
}

const deletePost = (request, response) => {
    Bug.findByIdAndDelete(request.body._id)
        .then(() => response.redirect("/projects"))
        .catch((error) => console.log(error));
}

module.exports = {
    all,
    createGet,
    createPost,
    updateGet,
    updatePost,
    deleteGet,
    deletePost,
}
