import bookModel from "../model/bookModel.js";

export const addBookController = async (req, res) => {
  try {
    const { title, author, ISBN, price, quantity } = req.body;
    const book = await bookModel.create(req.body);

    res.status(200).json({
      success: true,
      message: "Book added successfully",
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong in add book controller",
      error: error.message,
    });
  }
};

export const getBooksController = async (req, res) => {
  try {
    const books = await bookModel.find();
    return res.status(200).json({
      success: true,
      message: "Successfully Fetched All Book Details",
      books,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in get books controller",
      error: error.message,
    });
  }
};
