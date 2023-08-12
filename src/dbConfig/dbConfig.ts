import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = await mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongoose connection established");
    });

    connection.on("error", (err) => {
      console.log("mongodb connection error. Please make sure mongodb is running" + err);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
};
