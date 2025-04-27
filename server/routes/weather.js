import express from "express";
import cityMiddleware from "../middleware/cityMiddleware.js";
import axios from "axios";
const router = express.Router();

router.get("/find", cityMiddleware, async (req, res) => {
  try {
    const weatherResponce = await axios.get(
      "https://api.open-meteo.com/v1/forecast",
      {
        params: {
          latitude: req.coordinates.latitude,
          longitude: req.coordinates.longitude,
          daily: "temperature_2m_max,temperature_2m_min,weathercode",
          timezone: "auto",
          forecast_days: 4,
        },
      }
    );
    if (!weatherResponce.data) {
      return res
        .status(401)
        .json({ success: false, message: "Couldn't get forecast" });
    }
    return res
      .status(200)
      .json({
        success: true,
        forecast: weatherResponce.data.daily,
        currentCity: req.query.city,
      });
  } catch (error) {
    console.log(error);
  }
});

export default router;
