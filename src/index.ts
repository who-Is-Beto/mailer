import express from "express";
import path from "path";
import diaryRouter from "./routes/mailsender";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const port = 3001;
app.get("/ping", (_, res): void => {
  res.send("pong");
});

app.use("/api/send", diaryRouter);

app.listen(port, (): void => {
  console.log("APP IS RUNNING IN PORT", port);
});
