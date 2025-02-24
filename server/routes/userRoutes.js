const express = require('express');
const { getUsers, getUserById, updateUser } = require('../controllers/userController');

const router = express.Router();
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);

module.exports = router;
