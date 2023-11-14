const User = require("../model/users");

class UserController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { email, password, isAdmin } = req.body;

    // INIT
    const newUser = new User({ email, password, isAdmin });

    // SAVE
    await newUser.save();

    // RESPONSE
    res.json({ email, password, isAdmin });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const users = await User.find({}).exec();

    // RESPONSE
    res.json(users);
  }

  // READ BY ID
  async findById(req, res) {
    const { userID } = req.params;

    // FIND SINGLE DATA
    const user = await User.findById(userID).exec();

    // RESPONSE
    res.json(user);
  }

  // UPDATE
  async put(req, res) {
    const { userID } = req.params;
    const { email, password, isAdmin } = req.body;

    // FIND SINGLE DATA
    const user = await User.findById(userID).exec();

    // UPDATE
    user.email = email || user.email;
    user.password = password || user.password;
    user.isAdmin = isAdmin != null ? isAdmin : user.isAdmin;

    // SAVE
    await user.save();

    // RESPONSE
    res.json(user);
  }

  // DELETE
  async delete(req, res) {
    const { userID } = req.params;

    // DELETE SINGLE DATA
    const user = await User.deleteOne({ _id: userID });

    // RESPONSE
    res.json(user);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedUsers = await User.deleteMany({});

    // RESPONSE
    res.json(deletedUsers);
  }
}

module.exports = UserController;
