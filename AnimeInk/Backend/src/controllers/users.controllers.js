import { updateProfile, deleteAvatar } from "../databases/users.db.js";

export const UpdateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, avatar } = req.body;

    const response = await updateProfile(username, email, avatar, id);
    if (!response) {
      console.error(response, "Error Model ! 🚧");
      return res.status(404).json({
        success: false,
        message: "Not UPDATED ❌",
      });
    }
    res.status(202).json({
      success: true,
      message: "UPDATED on Success ✅",
      username: username,
      email: email,
      avatar: avatar,
    });
    return [response.username, response.email, response.avatar];
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error 🚫", error });
  }
};

export const DeleteAvatar = async (req, res) => {
  try {
    const user_id = req.params.id;
    const response = await deleteAvatar(user_id);
    if (!response) {
      res.status(404).json({ success: false, message: "Not DELETE ❌" });
      return false;
    }
    res.status(202).json({
      success: true,
      message: "DELETE on Success ✅",
    });
    return true;
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error 🚫", error });
  }
};
