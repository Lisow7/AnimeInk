import {
  getAllComments,
  getOneComment,
  addComment,
} from "../databases/comments.db.js";

export const GetAllComments = async (req, res) => {
  try {
    const response = await getAllComments();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).message(" Comments not found");
    }
  } catch (error) {
    res.status(500).send("All Comments NOT FOUND");
  }
};

export const GetOneComment = async (req, res) => {
  try {
    const comment_id = req.params.id;
    const response = await getOneComment(comment_id);

    if (response.result && response.result.length > 0) {
      res.status(200).json(response.result);
    } else {
      res.status(404).send("Comment not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const CreateComment = async (req, res) => {
  const { content } = req.body;

  try {
    const newComment = await addComment({ content });
    if (newComment === undefined) {
      res.status(404).send("The comment could not be created ❌");
    } else {
      return res.status(201).json({
        message: "Comment CREATED Successfully !⭕",
        comment_id: newComment,
        content: content,
      });
    }
  } catch (error) {
    res.status(500).send("Error creating comment");
  }
};
