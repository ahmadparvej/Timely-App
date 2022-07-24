const { Router } = require("express");
const projectRouter = Router();
const ProjectModel = require("./Project.model");

projectRouter.get("/:userId/projects", async (req, res) => {
  const userId = req.params.userId;
  const projects = await ProjectModel.find({ userId });
  res.send(projects);
});

projectRouter.get("/projects", async (req, res) => {
  const projects = await ProjectModel.find();
  res.send(projects);
});

projectRouter.post("/:userId/projects", async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  let payload = {
    ...req.body,
    userId,
  };
  const project = await new ProjectModel(payload);
  project.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "Something went wrong" });
    }
    console.log(success);
    return res.status(201).send(success);
  });
});

projectRouter.delete("/:projectId", async (req, res) => {
  const  projectId  = req.params;
  console.log(projectId);
    await ProjectModel.findOneAndRemove(projectId);
    const freshData = await ProjectModel.find()
  res.send(freshData);
});

projectRouter.patch("/:projectId", async (req, res) => {
    console.log(req.params)
  const projectId = req.params;
  console.log(projectId);
    await ProjectModel.findOneAndUpdate(projectId,req.body);
    const updatedPro = await ProjectModel.find(projectId)
  res.send(updatedPro);
});
module.exports = projectRouter;
