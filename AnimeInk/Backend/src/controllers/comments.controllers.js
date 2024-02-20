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
    if (response) {
      res.status(200).json({ data: response, message: "⭕" });
    } else {
      res.status(404).json({ message: "Comments not found ❌" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error GET ALL comments 🚫" });
  }
};

export const GetOneComment = async (req, res) => {
  try {
    const comment_id = req.params.id;
    const response = await getOneComment(comment_id);

    if (response.result && response.result.length > 0) {
      res.status(200).json({ data: response.result, message: "⭕" });
    } else {
      res.status(404).json({ message: "Comment not found ❌" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error GET ONE comment 🚫" });
  }
};

export const CreateComment = async (req, res) => {
  const { content } = req.body;

  try {
    const newComment = await addComment({ content });
    if (newComment === undefined) {
      res.status(404).json({ message: "The comment could not be created ❌" });
    } else {
      return res.status(201).json({
        message: "Comment CREATED Successfully !⭕",
        comment_id: newComment,
        content: content,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error CREATING comment 🚫" });
  }
};

export const UpdateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const response = await updateComment(content, id);
    if (response) {
      res
        .status(202)
        .json({ message: "Comment UPDATE successfully ⭕", response });
    } else {
      res.status(404).json({ message: "Comment not UPDATED ❌" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error UPDATING comment 🚫" });
  }
};

export const DeleteComment = async (req, res) => {
  try {
    const comment_id = req.params.id;
    const response = await deleteComment(comment_id);

    if (response.result && response.result.affectedRows > 0) {
      res.status(202).json({ message: "Comment DELETE successfully ⭕" });
    } else {
      res.status(404).json({ message: "Comment not DELETED ❌" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error DELETING comment 🚫" });
  }
};
