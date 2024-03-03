import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  ISBN: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  review: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      comment: {
        type: String,
        require: [true, "Comment required"],
      },
      rating: {
        type: Number,
        requre: [true, "Raating is required"],
      },
    },
  ],
  default: [],
});

export default mongoose.model("book", bookSchema);
