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

export const getBookController = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const book = await bookModel.findById(bookId);

    return res.status(200).json({
      success: true,
      message: "Successfully Fetched All Book Details",
      book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in get books controller",
      error: `Book Not Found with BookId ${req.params.bookId}`,
    });
  }
};

export const updateBookController = async (req, res) => {
  try {
    await bookModel.findByIdAndUpdate(req.params.bookId, req.body);
    const book = await bookModel.findById(req.params.bookId);
    return res.status(200).json({
      success: true,
      message: "Book Updated Successfully",
      book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in update books controller",
      error: "Facing issue while updating book",
    });
  }
};
