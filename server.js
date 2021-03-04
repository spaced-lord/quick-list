const express = require("express");
const passport = require("passport");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");


const PORT = process.env.PORT || 3001;
const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));
app.listen(PORT);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/groceryList", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
