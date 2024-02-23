import userModel from "../model/userModel.js";

export const signupController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      res.status(400).json({
        success: false,
        message: "User Already Exist !. Try with another email",
      });
    }

    const newUser = await userModel.create(req.body);
    let userId = newUser._id;
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      userId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong in signup   controller",
      error,
    });
  }
};
