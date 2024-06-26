import express from "express";
import cors from "cors";
import router from "./Routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

export default app;
