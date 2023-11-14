require("dotenv").config();
require("express-async-errors");

const Connect = require("./database/Connection");
const LocalStrategy = require("passport-local").Strategy;
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const path = require("path");

// AUTH CONRTOLLER
const LoginController = require("./controller/page/LoginController");

// ROUTES
const testRoute = require("./router/testRoute");
const userRoute = require("./router/userRoute");
const subjectTypeRoute = require("./router/subjectTypeRoute");
const subjectRoute = require("./router/subjectRoute");
const strandTypeRoute = require("./router/strandTypeRoute");
const strandSubjectRoute = require("./router/strandSubjectRoute");
const strandRoute = require("./router/strandRoute");
const selectedStrandRoute = require("./router/selectedStrandRoute");
const selectedPERoute = require("./router/selectedPERoute");
const questionRoute = require("./router/questionRoute");
const peRoute = require("./router/peRoute");
const blocklistTokenRoute = require("./router/blocklistTokenRoute");
const answerRoute = require("./router/answerRoute");
const answerKeyRoute = require("./router/answerKeyRoute");

// ROUTES => PAGES
const resultRoute = require("./router/page/resultRoute");
const dashboardRoute = require("./router/page/dashboardRoute");
const subjectPRoute = require("./router/page/subjectRoute");
const registerRoute = require("./router/page/registerRoute");
const loginRoute = require("./router/page/loginRoute");
const forgotRoute = require("./router/page/forgotRoute");
const resetRoute = require("./router/page/resetRoute");
const adminRoute = require("./router/page/adminRoute");
const viewableRoute = require("./router/viewRoute");

// IMPORT DB TEST
const User = require("./model/users");

// Apply CORS
app.use(cors());

// SESSION & PASSPORT
const SECRET = process.env.SHS_SECRET;
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the directory where your image files are located (assuming "uploads" folder in the main directory)
const uploadDirectory = path.join(__dirname, "uploads");

// Serve files from the "uploads" directory
app.use("/uploads", (req, res, next) => {
  const allowedExtensions = [".png", ".jpg", ".webp", ".gif"];

  // Get the file extension from the request URL
  const fileExtension = path.extname(req.url);

  if (allowedExtensions.includes(fileExtension)) {
    // Serve the file if it has an allowed extension
    express.static(uploadDirectory)(req, res, next);
  } else {
    // Return a 404 response for non-allowed extensions
    res.status(404).end("Not Found");
  }
});

// MAIN MIDDLEWARE
/* /shs-strand-finder/api/V1.0.0 */
const serverName = "/api/V1.0.0";
app.use("/shs-strand-finder/test", testRoute);
app.use(serverName + "/user", userRoute);
app.use(serverName + "/subjectType", subjectTypeRoute);
app.use(serverName + "/subject", subjectRoute);
app.use(serverName + "/strandType", strandTypeRoute);
app.use(serverName + "/strandSubject", strandSubjectRoute);
app.use(serverName + "/strand", strandRoute);
app.use(serverName + "/selectedStrand", selectedStrandRoute);
app.use(serverName + "/selectedPE", selectedPERoute);
app.use(serverName + "/question", questionRoute);
app.use(serverName + "/pe", peRoute);
app.use(serverName + "/blocklistToken", blocklistTokenRoute);
app.use(serverName + "/answer", answerRoute);
app.use(serverName + "/answerKey", answerKeyRoute);
app.use(serverName + "/admin", adminRoute);
app.use(serverName + "/view", viewableRoute);

// MIDDLEWARE => PAGES
app.use(serverName + "/result", resultRoute);
app.use(serverName + "/dashboard", dashboardRoute);
app.use(serverName + "/subjectP", subjectPRoute);
app.use(serverName + "/register", registerRoute);
app.use(serverName + "/login", loginRoute);
app.use(serverName + "/forgot", forgotRoute);
app.use(serverName + "/reset", resetRoute);

// AUTHENTICATION
const loginController = new LoginController();
const loginURL = serverName + "/login";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    loginController.auth
  )
);

passport.serializeUser(loginController.serialize);
passport.deserializeUser(loginController.deserialize);

app.post(loginURL, async (req, res, next) => {
  await passport.authenticate(
    "local",
    await loginController.success(req, res) /*{
      successRedirect: loginURL + "/success",
      failureRedirect: loginURL + "/failure",
      failureFlash: true,
    }*/
  )(req, res, next);
});

// LOGOUT
app.get(serverName + "/logout", (req, res) => {
  // Clear the user's session (log them out)
  req.logout((err) => {
    if (err) {
      return res.json({ error: "Logout failed" });
    }

    // Remove the token from the session
    delete req.session.token;

    // Redirect to a logout success page or any other appropriate action
    res.json({ success: true });
  });
});

// ERROR HANDLING
const ErrorMiddleware = require("./middleware/ErrorMiddleware");
const errorMiddleware = new ErrorMiddleware();
app.use(errorMiddleware.erorr);

// LISTEN
const PORT = process.env.SHS_PORT;
const DB_URL = process.env.SHS_DATABASE_URL;

// CONNECTION
const connection = new Connect(DB_URL);

app.listen(PORT, async () => {
  console.log(`listen on server ${PORT}`);
  connection.connect(() => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  });
});
