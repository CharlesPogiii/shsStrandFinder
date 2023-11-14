const User = require("../../model/users");

class AdminController {
  // auth
  async auth(req, res) {
    const users = await User.find({}, { password: 0 });

    res.json({
      user: req.user,
      users,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }

  async authAccess(req, res) {
    res.json({
      user: req.user,
    });
  }

  // edit access
  async access(req, res) {
    const { userID } = req.params;
    const { isAccess } = req.body;

    if (!userID) {
      throw new Error("Fill up User ID first!");
    }

    const selectedUser = await User.findById(userID, { password: 0 }).exec();

    if (!userID) {
      throw new Error("User you selected does not exist!");
    }

    selectedUser.isAdmin = isAccess;
    await selectedUser.save();

    res.json({ user: selectedUser });
  }
}

module.exports = AdminController;
