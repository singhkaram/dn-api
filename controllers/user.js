const User = require("../schema/userSchema");

let count = 0;
// Create a new user
const postUser = async (req, res) => {
  count++;
  const { name, email, age } = req.body;
  console.log("🚀 ~ postUser ~ age:", age);
  console.log("🚀 ~ postUser ~ email:", email);
  console.log("🚀 ~ postUser ~ name:", name);

  try {
    const user = new User({ name, email, age });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

// Get all users
const getUser = async (req, res) => {
  count++;
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

// Update a user
const putUser = async (req, res) => {
  count++;
  const { id } = req.params;
  const { name, email, age } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, age },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  count++;
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

// Get count
const getCount = async (req, res) => {
  count++;
  res.send({ count });
};

const resetCount = async (req, res) => {
  count = 0;
  res.send({ count });
};

module.exports = {
  postUser,
  getUser,
  putUser,
  deleteUser,
  getCount,
  resetCount,
};
