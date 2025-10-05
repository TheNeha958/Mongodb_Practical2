const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

// Create
router.post('/', controller.createStudent);

// Read all
router.get('/', controller.getAllStudents);

// Read by id
router.get('/:id', controller.getStudentById);

// Update
router.put('/:id', controller.updateStudent);

// Delete
router.delete('/:id', controller.deleteStudent);

module.exports = router;
