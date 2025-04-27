import jwt from "jsonwebtoken";
import User from "../models/User.js";

const middleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "No token" });
    }
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Couldn't decode token" });
    }
    const user = await User.findById({ _id: decoded.id });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User was not found" });
    }
    const newUser = { name: user.name, id: user._id };
    req.user = newUser;
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
};

export default middleware;
