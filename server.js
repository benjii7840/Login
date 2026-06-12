import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

app.listen(5001, () => {
  console.log("server is running at port 5001");
});
