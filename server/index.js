import express from "express";
import connectToDB from "./db/WeatherDB.js";
import cors from "cors";
import auth from "./routes/auth.js";
import weather from "./routes/weather.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/weather", weather);

app.listen(port, () => {
  connectToDB();
  console.log(`Server running on port ${port}`);
});
