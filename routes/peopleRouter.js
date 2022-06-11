const express = require('express');

const { getAllPeople, getMaxAgePeople, getPeopleWithSameFirstAndLastDigitPhNo } = require('../controllers/peopleController');

const router = express.Router();

router.get('/', getAllPeople);
router.get('/maxAge', getMaxAgePeople);
router.get('/phoneMatch', getPeopleWithSameFirstAndLastDigitPhNo);

module.exports = router;
