const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    "projectName": String,
    "client": String,
    "singColor": String,
    "userId":String
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;  