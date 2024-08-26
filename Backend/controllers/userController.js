const User = require('../models/User');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log('Body:', req.body);
  console.log('File:', req.file);

  if (!name || !email || !password || !req.file) {
    return res.status(400).json({ msg: 'Please provide all required fields including a resume.' });
  }

  try {
  
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const resumePath = req.file.path;

    user = new User({
      name,
      email,
      password,  
      resume: resumePath,
    });

    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  registerUser,
  upload,
};
