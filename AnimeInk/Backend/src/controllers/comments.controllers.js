import {
  getAllComments,
  getOneComment,
  findComment,
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
    const response = await getOneComment();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).message(" Comment not found");
    }
  } catch (error) {
    res.status(500).send("A Comment NOT FOUND");
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
    res.status(500).send("Error creating comment");
  }
};
