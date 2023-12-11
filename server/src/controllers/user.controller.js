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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.isPasswordCorrect)) {
    return res
      .status(200)
      .json(new ApiResponse(200, `${user.username} logged in successfully`));
  } else {
    throw new ApiError(404, "Invalid credentials");
  }
});

export { registerUser, loginUser };
