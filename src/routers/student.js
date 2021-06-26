const express = require('express');
const router = new express.Router();
const Student = require('../models/students');

// create a new students
router.post("/Api/AddStudent", async (req, res) => {
    try {
        const user = new Student(req.body);
        const insertStudent = await user.save();
        res.status(201).send(insertStudent);
    } catch (e) {
        res.status(401).send(e);
    }
})

// we will handle get req
router.get("/Api/GetStudent", async (req, res) => {
    try {
        const getStudents = await Student.find({}).sort({ "name": 1 });
        res.send(getStudents);
    } catch (e) {
        res.status(401).send(e);
    }
})

// we will handle get req by id
router.get("/Api/GetStudentById/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getStudent = await Student.findById(_id);
        res.send(getStudent);
    } catch (e) {
        res.status(401).send(e);
    }
})

// we will handle patch req by id
router.patch("/Api/UpdateStudentById/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updateStudent);
    } catch (e) {
        res.status(501).send(e);
    }
})

// we will handle delete req by id
router.delete("/Api/DeleteStudentById/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        res.send(deleteStudent);
    } catch (e) {
        res.status(501).send(e);
    }
})

module.exports = router;