const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema(
   {
      firstName: String,
      lastName: String,
      gender: String,
      age: Number,
      number: String,
   },
   {
      timestamps: true,
   }
);

const PeopleModel = mongoose.model('People', peopleSchema);


module.exports = PeopleModel;
