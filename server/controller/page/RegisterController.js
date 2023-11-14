const User = require("../../model/users");

// BYCRYPT
const bcrypt = require("bcryptjs");

class RegisterController {
  async register(req, res) {
    const { email, password, confirmPassword, isAdmin } = req.body;

    // VALIDATION
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
    const newUser = new User({ email, password: hashedPassword, isAdmin });

    // SAVE
    await newUser.save();

    // RESPONSE
    res.json({ email, password, isAdmin });
  }
}

module.exports = RegisterController;
