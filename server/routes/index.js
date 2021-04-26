import express from "express";
import IndexRouter from "./users.js";
import UserRouter from "./user";

const routes = (app) => {
  app.use("/", IndexRouter);
  app.use("/users", UserRouter);
};

export default routes;
