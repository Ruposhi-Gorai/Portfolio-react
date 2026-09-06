import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getProjects } from "./Controllers/projectapi.js";
import { saveVisitor } from "./Controllers/visitorapi.js";

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.get("/api/projects", getProjects);
server.post("/api/visitors", saveVisitor);

server.get("/", (req, res) => {
  res.send("Server is running");
  
}); 
 

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});