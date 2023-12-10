import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log(
      `Mongodb connected successfully !! host:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection failed !!", error);
    process.exit(1);
  }
};

export { dbConnection };
