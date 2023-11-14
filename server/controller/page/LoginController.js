const User = require("../../model/users");

// BYCRYPT & JWT
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class LoginController {
  // passport format
  async auth(email, password, done) {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return done(null, false, { error: "Incorrect email." });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return done(null, false, { error: "Incorrect password." });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }

  // serializer
  async serialize(user, done) {
    done(null, user.id);
  }

  // deserializer
  async deserialize(id, done) {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  }

  // success
  async success(req, res) {
    return async (err, user, info) => {
      // This is the authenticated user
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (!user) {
        // Run your failure method here
        return await this.failure(req, res);
      }

      // Create a JWT token
      const token = jwt.sign(
        {
          user: {
            id: user._id.toString(),
            email: user.email,
            isAdmin: user.isAdmin,
          },
        },
        process.env.SHS_JWT_SECRET
        /*{
          expiresIn: "1h",
        }*/
      );

      // Save the token to the session
      req.session.token = token;

      // Send the token as a bearer token in the response
      return res.json({ token });
    };
  }

  // failure
  async failure(req, res) {
    return res.json({ error: "Invalid credentials!" });
  }
}

module.exports = LoginController;
