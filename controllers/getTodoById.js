const Todo = require("../models/Todo");
exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with Id",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data sucessfullly fetched`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
        success: false,
        data: err.message,
        message: "Not found"
    })
  }
};
