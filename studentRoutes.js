const express = require('express');
const router = express.Router();
const StudentController = require('./students.controller');


router.post('/', StudentController.createStudent);
router.get('/count', StudentController.countStudents);
router.get('/search/email/:email', StudentController.getStudentByEmail);
router.get('/search/name/:name', StudentController.getStudentByName);
router.get('/', StudentController.getAllStudents);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);
router.get('/:id', StudentController.getStudentById);

module.exports = router;

