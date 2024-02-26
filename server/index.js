import { app } from "./app.js";
import express from "express";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import { connect } from "./config/db.js";
import path from "path";

dotenv.config({ path: "server/.env" });

const __dirname = path.resolve();

const PORT = process.env.PORT || 6000;

connect();
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

app.listen(PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
