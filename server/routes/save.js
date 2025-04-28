import axios from "axios";
import express from "express";
import Location from "../models/Location.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { currentCity, user } = req.body;
    const city = await Location.findOne({ city: currentCity });
    if (city) {
      return res
        .status(401)
        .json({ success: false, message: "City already exists in db" });
    }
    const newLocation = new Location({
      city: currentCity,
      userId: user.id,
    });
    await newLocation.save();
    return res
      .status(200)
      .json({ success: true, message: "Location was added successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
});

router.get("/check", async (req, res) => {
  try {
    const city = await Location.findOne({ city: req.query.currentCity });
    if (!city) {
      return res
        .status(401)
        .json({ success: false, message: "City isn't saved" });
    }
    return res.status(200).json({ success: true, message: "City is saved" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
});

export default router;
