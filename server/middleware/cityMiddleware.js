import axios from "axios";

const cityMiddleware = async (req, res, next) => {
  const city = req.query.city;
  if (!city) {
    return res
      .status(400)
      .json({ success: false, message: "City is required" });
  }
  try {
    const responce = await axios.get(
      "https://geocoding-api.open-meteo.com/v1/search",
      {
        params: {
          name: city,
          count: 1,
          language: "en",
          format: "json",
        },
      }
    );
    const location = responce.data.results?.[0];

    if (!location) {
      return res
        .status(401)
        .json({ success: false, message: "City was not founded" });
    }

    req.coordinates = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    next();
  } catch (error) {
    console.log(error);
  }
};

export default cityMiddleware;
