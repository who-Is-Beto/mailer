import express from "express";
import path from "path";
import diaryRouter from "./routes/mailsender";
import cors from "cors";
import { environment } from "./envs";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (environment.aviableDomains.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " + "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);
app.use(express.static(path.join(__dirname, "public")));

const port = environment.port;
app.get("/ping", (_, res): void => {
  res.send("pong");
});

app.use("/api/send", diaryRouter);
app.use(cors());

app.listen(port, (): void => {
  console.log("APP IS RUNNING IN PORT", port);
});
