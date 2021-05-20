const UserStory = require("../models/userStory");

const all = (request, response) => {
    UserStory.find({ projectId: request.params.id })
        .sort({priority : -1})
        .then((userstories) =>
            response.render("userstories", { userstories: userstories })
        )
        .catch((error) => console.log(error));
}

////////////CREATE//////////////

const createGet = (request, response) => {
    response.render("userstories/create", { projectId: request.params.id });
}

const createPost = (request, response) => {
    UserStory.create(request.body)
        .then(() => response.redirect("/projects"))
        .then((error) => console.log(error));
}

////////////UPDATE//////////////

const updateGet = (request, response) => {
    const id = request.params.id;
    UserStory.findById(id)
        .then((userStory) =>
            response.render("userstories/update", { userStory: userStory })
        )
        .catch((error) => console.log(error));
}

const updatePost = (request, response) => {
    const userStory = request.body;
    UserStory.findByIdAndUpdate(userStory._id, {
        title: userStory.title,
        description: userStory.description,
        acceptanceCriteria: userStory.acceptanceCriteria,
        priority: userStory.priority,
        projectId: userStory.projectId,
    })
        .then(() => response.redirect("/projects"))
        .catch((error) => console.log(error));
}

////////////DELETE//////////////

const deleteGet = (request, response) => {
    const id = request.params.id;
    response.render("userstories/delete", { _id: id });
}

const deletePost = (request, response) => {
    UserStory.findByIdAndDelete(request.body._id)
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
