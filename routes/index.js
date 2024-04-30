var express = require("express");
var router = express.Router();
const {
  postUser,
  getUser,
  putUser,
  deleteUser,
  getCount,
  resetCount,
} = require("../controllers/user");

/* GET home page. */
router.post("/users", postUser);
router.post("/count/reset", resetCount);

router.get("/users", getUser);
router.get("/count", getCount);

router.put("/users/:id", putUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
