const PeopleModel = require('../models/People');

// Get all People

exports.getAllPeople = async (req, res) => {
   try {
      const people = await PeopleModel.find();

      res.status(200).json({
         status: 'success',
         results: people.length,
         data: people,
      });
   } catch (err) {
      res.status(500).json({
         status: 'fail',
         message: 'Internal Server Error',
         error: err,
      });
   }
};

// Get People having maximum age

exports.getMaxAgePeople = async (req, res) => {
   try {
      const people = await PeopleModel.find();

      // Find the max age
      const maxAge = people.reduce(
         (acc, curr) => {
            if (curr.age > acc.age) {
               return curr;
            }
            return acc;
         },
         { age: 0 }
      );

      // Find the people with that maxAge
      const responseData = people.filter((person) => person.age === maxAge.age);

      res.status(200).json({
         status: 'success',
         results: responseData.length,
         data: responseData,
      });
   } catch (err) {
      res.status(500).json({
         status: 'fail',
         message: 'Internal Server Error',
         error: err,
      });
   }
};

// Get People having same first and last digits in phone number

exports.getPeopleWithSameFirstAndLastDigitPhNo = async (req, res) => {
   try {
      const people = await PeopleModel.find();

      const responseData = people.filter((person) => {
         const firstDigit = person.number.charAt(0);
         const lastDigit = person.number.charAt(person.number.length - 1);

         if (firstDigit === lastDigit) {
            return person;
         }
      });
      
      res.status(200).json({
         status: 'success',
         results: responseData.length,
         data: responseData,
      });
   } catch (err) {
      res.status(500).json({
         status: 'fail',
         message: 'Internal Server Error',
         error: err,
      });
   }
};
