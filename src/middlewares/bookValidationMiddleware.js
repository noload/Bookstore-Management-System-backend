import zod from "zod";

export const addBookValidation = async (req, res, next) => {
  const addBookSchema = zod
    .object({
      title: zod.string({ required_error: "Title not mentioned" }).trim(),
      author: zod.string({ required_error: "author not mentioned" }).trim(),
      ISBN: zod
        .string({
          required_error: "International Standard Book Number not mentioned",
        })
        .trim(),
      price: zod.number({ required_error: "Price not mentioned" }).positive(),
      quantity: zod
        .number({ required_error: "Quantity not mentioned" })
        .positive(),
    })
    .strict();

  const { success, error } = addBookSchema.safeParse(req.body);

  if (error) {
    let errorMsg = "";
    error.issues.map((err) => {
      errorMsg += err.message + " || ";
    });
    return res.status(400).json({
      success: false,
      message: "Invalid input fields",
      error: errorMsg,
    });
  }

  next();
};
