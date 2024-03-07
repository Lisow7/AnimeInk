import { updateProfile, deleteAvatar } from "../databases/users.db.js";

export const UpdateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, avatar } = req.body;

    const response = await updateProfile(username, email, avatar, id);
    if (!response) {
      res.status(404).json({
        success: false,
        message: "Profile is NOT UPDATED ❌",
      });
      return console.error(response, "Error Model ! 🚧");
    }
    res.status(202).json({
      success: true,
      message: "Profile is UPDATED on Success ✅",
      username: username,
      email: email,
      avatar: avatar,
    });
    return [response.username, response.email, response.avatar];
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error 🚫", error });
  }
};

export const DeleteAvatar = async (req, res) => {
  try {
    const user_id = req.params.id;
    const response = await deleteAvatar(user_id);
    if (!response) {
      res
        .status(404)
        .json({ success: false, message: "Avatar Profile is NOT DELETE ❌" });
      return false;
    }
    res.status(202).json({
      success: true,
      message: "Avatar Profile is DELETE on Success ✅",
    });
    return true;
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error 🚫", error });
  }
};
