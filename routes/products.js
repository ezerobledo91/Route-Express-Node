var express = require("express");
var router = express.Router();

/* GET Products Listing. */
router.get("/", function (req, res, next) {
  const productos = [
    {
      id: 1,
      price: 200,
      name: "MotoG",
    },
    {
      id: 2,
      price: 300,
      name: "Motox",
    },
  ];
  res.json(productos);
});

module.exports = router;
