import express from "express";
import "dotenv/config";
import path from "path";
import diaryRouter from "./routes/mailsender";
import cors from "cors";
import { environment } from "./envs";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const port = environment.port;
console.log(environment);
app.get("/ping", (_, res): void => {
  res.send("pong");
});

app.use("/api/send", diaryRouter);
app.use(cors());

app.listen(port, (): void => {
  console.log("APP IS RUNNING IN PORT", port);
});
