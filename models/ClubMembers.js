const mongoose = require('mongoose');

const clubMembersSchema = mongoose.Schema(
   {
      name: String,
      registerationNo: {
         type: Number,
         required: true,
         unique: true,
      },
      department: String,
      tag: String,
      domain: String,
      mobileNo: Number,
      email: String,
   },
   {
      timestamps: true,
   }
);

const ClubMembers = mongoose.model('ClubMembers', clubMembersSchema);

module.exports = ClubMembers;
