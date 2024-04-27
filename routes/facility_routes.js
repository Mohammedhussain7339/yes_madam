const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const s_facility_controller= require('../controllers/s_facility');


const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage });

//   routes
router.post('/s_facility', upload.single('s_facility_image'), s_facility_controller.createFacility);
router.get('/s_facilities', s_facility_controller.getFacilities);

module.exports = router;

