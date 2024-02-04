import { getAllComments } from ("../databases/comments.db");

export const getAllComments = async (req, res) => {
    try {
      const response = await getAllCategories();
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).message(" Comments not found");
      }
    } catch (error) {
      res.status(500).send("All Comments NOT FOUND");
    }
  };