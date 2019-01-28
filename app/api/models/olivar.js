const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const OlivarSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 variedad: {
    type: String,
    enum: ['Ecologica','NoEcologica'],
    default : 'NoEcologica'
},
 num_olivas: {
  type: Number,
  min  : 1,
  max  : 999999,
  trim: true,
  required: true
 }
});
module.exports = mongoose.model('Olivar', OlivarSchema)