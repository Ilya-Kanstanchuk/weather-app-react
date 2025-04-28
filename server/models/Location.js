import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  city: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Location = mongoose.model("Location", UserSchema);

export default Location;
