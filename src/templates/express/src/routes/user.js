const { Router } = require('express');
const { getAllUsers } = require('../controllers/user');
const requireAuth = require('../middlewares/authMiddleware');

const router = Router();

router.get('/users', requireAuth, getAllUsers);

module.exports = router;
