const ClubMembers = require('../models/ClubMembers');

// Get all club members

exports.getAllClubMembers = async (req, res) => {
   try {
      const clubMembers = await ClubMembers.find();
      res.status(200).json({ status: 'success', results: clubMembers.length, data: clubMembers });
   } catch (err) {
      res.status(500).json({ status: 'fail', message: err.message });
   }
};

// Get club members by id

exports.getClubMemberById = async (req, res) => {
   try {
      const clubMember = await ClubMembers.findById(req.params.id);
      if (!clubMember) {
         return res.status(404).json({ status: 'fail', message: 'Club member not found' });
      }
      res.status(200).json({ status: 'success', data: clubMember });
   } catch (err) {
      res.status(500).json({ status: 'fail', message: err.message });
   }
};

// Create a new club member

exports.registerClubMember = async (req, res) => {
   try {

      const newClubMember = await ClubMembers.create(req.body);

      res.status(201).json({ status: 'success', message: 'Club Member created successfully', data: newClubMember });
   } catch (err) {
      res.status(500).json({ status: 'fail', message: err.message });
   }
};

// Update club member details

exports.updateClubMember = async (req, res) => {
   try {
      const clubMember = await ClubMembers.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
      });

      if (!clubMember) {
         return res.status(404).json({ status: 'fail', message: 'Club member not found' });
      }

      res.status(200).json({ status: 'success', message: 'Club member details updated successfylly', data: clubMember });
   } catch (err) {
      res.status(500).json({ status: 'fail', message: err.message });
   }
};

// Delete club member by id

exports.deleteClubMember = async (req, res) => {
   try {
      const clubMember = await ClubMembers.findByIdAndDelete(req.params.id);
      if (!clubMember) {
         return res.status(404).json({ status: 'fail', message: 'Club member not found' });
      }
      res.status(200).json({ status: 'success', message: 'Club Member deleted successfully' });
   } catch (err) {
      res.status(500).json({ status: 'fail', message: err.message });
   }
};
