import zod from "zod";
export const signupValidation = async (req, res, next) => {
  try {
    const signupSchema = zod
      .object({
        name: zod
          .string({ required_error: "Name field is not mentioned" })
          .trim()
          .min(3, { message: "Must be 3 or more characters long" }),
        email: zod
          .string({ required_error: "Email field is not mentioned" })
          .email({ message: "Invalid Email address" })
          .trim(),
        password: zod
          .string({ required_error: "Password Not Mentioned" })
          .min(8, { message: "Must be 8 or more charater long" }),
      })
      .strict();

    const { success, error } = signupSchema.safeParse(req.body);
    let errorMsg = "";
    if (error) {
      error.issues.map((err) => {
        errorMsg += err.message + " || ";
      });
    }
    if (!success) {
      res.status(400).json({
        success: false,
        message: "Invalid input fields",
        error: errorMsg,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Bad Request",
      error,
    });
  }
};

export const signinValidation = async (req, res, next) => {
  try {
    const signinSchema = zod
      .object({
        email: zod
          .string({ required_error: "Email field is not mentioned" })
          .email({ message: "Invalid Email address" })
          .trim(),
        password: zod.string({ required_error: "Password Not Mentioned" }),
      })
      .strict();
    const { success, error } = signinSchema.safeParse(req.body);
    let errMsg = "";
    if (error) {
      error.issues.map((err) => {
        errMsg += err.message + " || ";
      });
    }
    if (!success) {
      res.status(400).json({
        success: false,
        message: "Invalid Input Field",
        error: errMsg,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "BAD REQUEST",
      error,
    });
  }
};
