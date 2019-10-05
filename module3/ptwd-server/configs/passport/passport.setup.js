const passport = require("passport");

require("./serializers");
require("./local.strategy");

module.exports = (app) => {
  // here is passport's SUPER POWER 🦸‍♀️
  app.use(passport.initialize()); // this "fires" the passport package
  app.use(passport.session()); // connects passport to sessions
}