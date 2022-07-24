const { Router } = require("express");
const TaskModel = require("./Tasks.model");

const taskRouter = Router();

taskRouter.get("/:projectId/task", async (req, res) => {
  const projectId = req.params.userId;
  const task = await ProjectModel.find({ projectId });
  res.send(task);
});

taskRouter.post("/:projectId/task", async (req, res) => {
  const { projectId } = req.params;
  const payload = {
    ...req.body,
    projectId,
  };
  const task = await new TaskModel(payload);
  task.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "Something went wrong" });
    }
    console.log(success);
    return res.status(200).send(success);
  });
});

module.exports = taskRouter;
