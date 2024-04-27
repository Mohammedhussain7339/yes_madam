const s_facility_db = require('../models/salonfacility');

exports.createFacility = async (req, res) => {
    try {
      const facilityName = req.body.s_facility_name; // Accessing the text field
      const facilityImage = req.file.filename;
        console.log(facilityName,facilityImage)
    
        const s_facility = new s_facility_db({
          facilityName,
          facilityImage
        });
        console.log(s_facility)
    
        const new_facility=await s_facility.save();
        res.json(new_facility);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
      exports.getFacilities = async (req, res) => {
        try {
          const facilities = await s_facility_db.find();
          res.json(facilities);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };
      
    
 