const Todo = require("../models/Todo");
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    // continue from 33:00 BD CLASS 3
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() }
    );
    res.status(200).json({
      success: true,
      data: todo,
      message: "Updated Succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      data: err.message,
      message: "Error Occured",
    });
  }
};
