const User = require("../../model/users");

// BYCRYPT
const bcrypt = require("bcryptjs");

class ForgotController {
  async update(req, res) {
    const { email, password, confirmPassword } = req.body;

    // FIND USER BY EMAIL ID
    const forgottenUser = await User.findOne({ email }).exec();

    // VALIDATION
    if (!forgottenUser) {
      throw new Error("the given email does not exist!");
    }

    if (password.length < 8) {
      throw new Error("password is to short. Should be 8 or more characters!");
    }

    if (confirmPassword !== password) {
      throw new Error(
        "confirm password invalid. Make sure to verify the correct confirmation of your"
      );
    }

    // ENCRYPT
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // INIT
    forgottenUser.password = hashedPassword;

    // SAVE
    await forgottenUser.save();

    // RESPONSE
    res.json({ email, password });
  }
}

module.exports = ForgotController;
