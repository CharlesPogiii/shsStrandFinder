// BYCRYPT & JWT
const jwt = require("jsonwebtoken");

class AuthMiddleware {
  async authorize(req, res, next) {
    const authorizationHeader = req.header("Authorization");
    // const sessionToken = req.session.token;

    if (!authorizationHeader /* || !sessionToken */) {
      throw new Error("Access denied. Token is missing.");
    }

    const [bearer, token] = authorizationHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      throw new Error("Access denied. Invalid token format.");
    }

    const decoded = jwt.verify(token, process.env.SHS_JWT_SECRET);
    req.user = decoded.user;

    next();
  }
}

module.exports = AuthMiddleware;
