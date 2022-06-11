const joi = require('joi');

const validateAddMemberToClub = (req, res, next) => {
   const schema = joi.object({
      name: joi.string().min(0).max(40),
      registerationNo: joi.number().required(),
      department: joi.string().min(0).max(40),
      tag: joi.string().min(0).max(10),
      domain: joi.string().min(0).max(10),
      mobileNo: joi.number().required(),
      email: joi.string().email().min(0).max(40),
   });

   const { error } = schema.validate(req.body);

   if (error) {
      return res.status(400).json({ status: 'fail', message: error.details[0].message });
   }
   next();
};

const validateUpdateMemberToClub = (req, res, next) => {
   const schema = joi.object({
      name: joi.string().min(0).max(40),
      registrationNo: joi.number().min(10).max(10),
      department: joi.string().min(0).max(40),
      tag: joi.string().min(0).max(10),
      domain: joi.string().min(0).max(10),
      mobileNo: joi.number().min(10).max(10),
      email: joi.string().email().min(0).max(40),
   });

   const { error } = schema.validate(req.body);

   if (error) {
      return res.status(400).json({ status: 'fail', message: error.details[0].message });
   }

   next();
};

module.exports = {
   validateAddMemberToClub,
   validateUpdateMemberToClub,
};
