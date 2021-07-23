var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Mi App con Node JS y Express");
});

module.exports = router;
