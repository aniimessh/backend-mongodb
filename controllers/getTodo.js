const Todo = require("../models/Todo");
exports.getTodo = async (req, res) => {
  try {
    //   fetch all todo items from database
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire data fetched succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal server error",
    });
  }
};
