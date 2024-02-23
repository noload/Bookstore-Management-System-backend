export const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong in signup   controller",
      error,
    });
  }
};
