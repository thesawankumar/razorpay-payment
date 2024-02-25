import { app } from "./app.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import { connect } from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 6000;
connect();
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
