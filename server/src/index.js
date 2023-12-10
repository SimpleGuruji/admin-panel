import dotenv from "dotenv";
import { dbConnection } from "./db/connection.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log(`app is listening on port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Express server error !!", error);
  });
