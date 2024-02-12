import { getAllComments } from "../databases/comments.db.js";

export const GetAllComments = async(req, res) => {
  try {
    const response = await getAllComments();
    if (response) {
      res.status(200).json(response);
    }
    else {
      res.status(404).message(" Comments not found");
    }
  }
  catch (error) {
    res.status(500).send("All Comments NOT FOUND");
  }
};
