const express = require('express');

const { validateAddMemberToClub, validateUpdateMemberToClub } = require('../validations/ClubValidations');

const { getAllClubMembers, getClubMemberById, registerClubMember, updateClubMember, deleteClubMember } = require('../controllers/clubController');

const router = express.Router();

router
   .get('/', getAllClubMembers)
   .get('/:id', getClubMemberById)
   .post('/', validateAddMemberToClub, registerClubMember)
   .patch('/:id', validateUpdateMemberToClub, updateClubMember)
   .delete('/:id', deleteClubMember);

module.exports = router;
