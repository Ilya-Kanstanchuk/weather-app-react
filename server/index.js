import express from "express";
import connectToDB from "./db/WeatherDB.js";
import cors from "cors";
import auth from "./routes/auth.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/auth", auth);

// async function startServer() {
//   try {
//     await connectToDB();
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// }

// startServer();

app.listen(port, () => {
  connectToDB();
  console.log(`Server running on port ${port}`);
});
