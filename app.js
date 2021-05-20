const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const projectRoutes = require("./routes/projectRoutes")
const userStoryRoutes = require("./routes/userStoryRoutes")

const app = express();

const dbUri = "mongodb+srv://alix:KH8V3yYSsjqCfjg@clusteralix.pff0a.mongodb.net/test"

mongoose.connect(dbUri, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log("(〃￣︶￣)人(￣︶￣〃)  Connected to database !")
        app.listen(3005, ()=> console.log("(☞ﾟヮﾟ)☞  Connected to port 3005 !"))})
    .catch(err=>console.log(err));

app.use(express.static("public"));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use("/projects", projectRoutes)

app.use("/userstories", userStoryRoutes)


app.get("/", (request, response) => {
  response.redirect("projects");
});

