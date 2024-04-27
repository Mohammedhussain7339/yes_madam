const mongoose =require('mongoose')
const { Schema } = mongoose;

const s_facility_schema = new mongoose.Schema({
    facilityName:String,
    facilityType:String,
    facilityImage:String,

    });
   const s_facility = mongoose.model('s_facility', s_facility_schema);  
   module.exports = s_facility;
