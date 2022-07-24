const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: String,
  projectType: String,
  loggedTime: String,
  projectId:String
});

const TaskModel = mongoose.model("task", taskSchema);

module.exports = TaskModel;
