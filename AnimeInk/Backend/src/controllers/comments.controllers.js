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
      res.status(200).json(response, "⭕");
    } else {
      res.status(404).message(" Comments not found ❌");
    }
  } catch (error) {
    res.status(500).send("Error GET ALL comments 🚫");
  }
};

export const GetOneComment = async (req, res) => {
  try {
    const comment_id = req.params.id;
    const response = await getOneComment(comment_id);

    if (response.result && response.result.length > 0) {
      res.status(200).json(response.result, "⭕");
    } else {
      res.status(404).send("Comment not found ❌");
    }
  } catch (error) {
    res.status(500).send("Error GET ONE comment 🚫");
  }
};

export const CreateComment = async (req, res) => {
  const { content } = req.body;

  try {
    const existingComment = await findComment(content);

    if (existingComment.length > 0) {
      return res.status(409).json({
        message: "Comment Already Exists !⚠️",
        comment: existingComment[0],
      });
    } else {
      const newComment = await addComment(req.body);
      return res.status(201).json({
        message: "Comment CREATED Successfully !⭕",
        comment_id: newComment,
      });
    }
  } catch (error) {
    res.status(500).send("Error CREATING comment 🚫");
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
      res.status(404).send("Comment not UPDATED ❌");
    }
  } catch (error) {
    res.status(500).send("Error UPDATING comment 🚫");
  }
};

export const DeleteComment = async (req, res) => {
  try {
    const comment_id = req.params.id;
    const response = await deleteComment(comment_id);

    if (response.result && response.result.affectedRows > 0) {
      res.status(202).json({ message: "Comment DELETE successfully ⭕" });
    } else {
      res.status(404).send("Comment not DELETED ❌");
    }
  } catch (error) {
    res.status(500).send("Error DELETING comment 🚫");
  }
};
