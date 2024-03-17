import {
  getAllComments,
  getOneComment,
  addComment,
  updateComment,
  deleteComment,
} from "../databases/comments.db.js";

export const GetAllComments = async (req, res) => {
  try {
    const response = await getAllComments();
    if (!response) {
      return res.status(404).json({ success: false, message: "Not found ❌" });
    }
    return res
      .status(200)
      .json({ success: true, data: response, message: "Found ⭕" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Interval Server Error 🚫" });
  }
};

export const GetOneComment = async (req, res) => {
  try {
    const comment_id = req.params.id;
    const response = await getOneComment(comment_id);

    if (!response.result && !response.result.length > 0) {
      return res.status(404).json({ success: false, message: "Not found ❌" });
    }
    return res
      .status(200)
      .json({ success: true, data: response.result, message: "Found ⭕" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Interval Server Error 🚫" });
  }
};

export const CreateComment = async (req, res) => {
  const { content } = req.body;

  try {
    const newComment = await addComment({ content });
    if (newComment === undefined) {
      return res
        .status(404)
        .json({ success: false, message: "Not CREATED ❌" });
    }
    return res.status(201).json({
      success: true,
      message: "CREATED Successfully !⭕",
      comment_id: newComment,
      content: content,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Interval Server Error 🚫" });
  }
};

export const UpdateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const response = await updateComment(content, id);
    if (!response) {
      return res
        .status(404)
        .json({ success: false, message: "Not UPDATED ❌" });
    }
    return res
      .status(202)
      .json({ success: true, message: "UPDATE successfully ⭕", response });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Interval Server Error 🚫" });
  }
};

export const DeleteComment = async (req, res) => {
  try {
    const comment_id = req.params.id;
    const response = await deleteComment(comment_id);

    if (!response.result && !response.result.affectedRows > 0) {
      return res
        .status(404)
        .json({ success: false, message: "Not DELETED ❌" });
    }
    return res
      .status(202)
      .json({ success: true, message: "DELETE successfully ⭕" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Interval Server Error 🚫" });
  }
};
