require('dotenv').config();

const fs = require('fs');
const mongoose = require('mongoose');

const PeopleModel = require('../models/People');

mongoose.connect(
   process.env.MONGODB_URI,
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   },
   () => {
      console.log('✅ MongoDB connection successufull');
   }
);

// READ JSON FILE
const people = JSON.parse(fs.readFileSync(`${__dirname}/backend_task1.json`, 'utf-8'));


// IMPORT DATA INTO DB
const importData = async () => {
   try {
      await PeopleModel.create(people);
      console.log('Data successfully loaded!');
   } catch (err) {
      console.log(err);
   }
   process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
   try {
      await PeopleModel.deleteMany();
      console.log('Data successfully deleted!');
   } catch (err) {
      console.log(err);
   }
   process.exit();
};

if (process.argv[2] === '--import') {
   importData();
} else if (process.argv[2] === '--delete') {
   deleteData();
}
