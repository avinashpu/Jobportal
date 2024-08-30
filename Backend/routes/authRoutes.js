const express = require('express');
const { registerUser } = require('../controllers/userController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.post('/signup', upload.single('resume'), registerUser);

module.exports = router;
