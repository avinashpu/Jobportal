const User = require('../models/User');
const { uploadOnCloudinary } = require('../utils/cloudinary');

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

    const cloudinaryResponse = await uploadOnCloudinary(req.file.path);

    if (!cloudinaryResponse) {
      return res.status(500).json({ msg: 'Error uploading resume to Cloudinary' });
    }

    user = new User({
      name,
      email,
      password,
      resume: cloudinaryResponse.url, 
    });

    await user.save();
    res.status(201).json({ msg: 'User registered successfully', resumeUrl: cloudinaryResponse.url });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { registerUser };
