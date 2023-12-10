import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, phone } = req.body;

  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(400, "User with this email already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
    phone,
  });

  const createdUser = await User.findById(user._id).select("-password");

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        createdUser,
        "User created successfully",
        await user.generateToken()
      )
    );
});

export { registerUser };
