import express from "express";
export const app = express();
import cors from "cors";
import dotenv from "dotenv";
import paymentRoute from "./routes/payment.js";
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", paymentRoute);
app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
