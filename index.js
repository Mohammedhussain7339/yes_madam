const express = require('express')
require ('dotenv').config();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dburl = require('./database/connection')
const cors = require('cors')
const facilityRoutes = require('./routes/facility_routes');
const registerRoutes= require('./routes/register_routes')
const loginRoutes= require('./routes/login_routes')


const app = express();
const PORT = process.env.PORT || 5000;



// Middleware
app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173' // Adjust according to your frontend's URL
  }));
  
app.use(bodyParser.json());

//////
app.use('/api', facilityRoutes); // Changed to a more RESTful endpoint naming
app.use('/api', registerRoutes); // Changed to a more RESTful endpoint naming
app.use('/api', loginRoutes); // Changed to a more RESTful endpoint naming


app.listen(PORT,()=>{
    console.log(`Server is start port ${PORT}`)
})