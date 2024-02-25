import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"))
    .catch((error) => {
      console.log("DB cONNECTION FAILED");
      console.error(error);
      process.exit(1);
    });
};
