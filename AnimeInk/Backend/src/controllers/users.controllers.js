import { updateProfile } from "../databases/users.db.js";

export const UpdateProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await updateProfile(req.body, id);
    if (response) {
      res
        .status(202)
        .send({ success: true, message: "Profile UPDATED", data: response });
    } else {
      res.status(404).send({
        success: false,
        message: "Profile NOT UPDATED",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
