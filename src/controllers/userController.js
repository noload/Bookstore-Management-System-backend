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

export const signinController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    //Password comaparision
    const pass = await user.comparePassword(password);
    if (!pass) {
      res.status(400).json({
        success: false,
        message: "Invalid crediantial | Please enter correct password",
      });
    }

    //token creation
    const token = await user.createJWT();

    res.status(200).json({
      success: true,
      message: "Logged Successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong in signin controller",
      error,
    });
  }
};

export const getProfileController = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.user.userId)
      .select("-password -__v"); //select() used to avoid some fields and also used to show some fields
    res.status(200).json({
      success: true,
      message: "Successfully Fetched User Details",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching profile details ",
      error,
    });
  }
};
