const uniqueid = require("./uniqe_id");

module.exports = (files) => {
  try {
    if (!files) {
      return "";
    } else {
      let avatar = files.avatar;
      let filename = "uploads/" + uniqueid() + avatar.name;
      avatar.mv(filename);
      return filename.toString();
    }
  } catch (err) {
    return "";
  }
};
