import express from "express";
import cors from "cors";

import dataSource from "./utils";
import router from "./router/index";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(router);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that !");
});

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(5000, () => console.log("Server started on 5000"));
};

void start();
