const register_db=require('../models/userinfo')
const bcrypt = require('bcrypt');


exports.createRegister=async (req,res)=>{
  console.log(req.body)
  try {
    const { firstname, lastname, age, gender, email, password, contact } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with hashed password
    const newUser = new register_db({
      firstname,
      lastname,
      age,
      gender,
      email,
      password: hashedPassword,
      contact,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();
    console.log('User saved successfully:', savedUser);
    res.send('User saved successfully');
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send('Error saving user');
  }
   }


  

