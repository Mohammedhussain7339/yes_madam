const userInfo = require('../models/userinfo'); // Assuming userInfo is your model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.createLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
  
    try {
      // Find user by email
      const user = await userInfo.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }
  
      // Compare the entered password with the hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        // Generate a token
        const token = jwt.sign(
          { userId: user._id, email: user.email, firstname: user.firstname, userRole: user.role },
          'your_secret_key',
          { expiresIn: '1h' }
        );
  
        res.json({ success: true, message: 'Login successful', token, userId: user._id, firstname: user.firstname, userRole: user.role });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  