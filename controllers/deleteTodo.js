const Todo = require("../models/Todo");
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      data: todo,
      message: "Deleted Succesfully",
    });
  } catch (err) {
    console.log(err);
    res.send(500).json({
      success: false,
      data: err.message,
      message: "Can't Delete the data",
    });
  }
};
