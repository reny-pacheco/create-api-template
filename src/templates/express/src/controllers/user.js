const users = require('../models/users');

exports.getAllUsers = async (req, res) => {
  try {
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ error: 'Error while retrieving users' });
  }
};
