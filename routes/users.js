var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/login", function (req, res, next) {
  res.send("Login de Usuarios");
});

router.post("/register", function (req, res, next) {
  res.send("Registro de Usuarios");
});

router.get();

module.exports = router;
