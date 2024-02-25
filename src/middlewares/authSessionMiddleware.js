export const authSession = (req, res, next) => {
  try {
    if (req.session.authenticated) {
      next();
    }
    return res.status(500).json({
      success: false,
      message: " You Are Not Authorized User",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: " Something went wrong in session auth",
      error,
    });
  }
};
