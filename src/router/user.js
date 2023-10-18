const express = require("express");
const router = express.Router();
const { User } = require("../model/user.model");
const { Hobby } = require("../model/hobby.model");
const { Picture } = require("../model/picture.model");

//get
router.get("/", async (req, res) => {
    const len = await User.length;
  res.send({len: len});
});

//post
router.post("/import-students", async (req, res) => {
  try {
    const students = req.body;
    for (let student of students) {
      await User.create({
        s_code: student.s_code,
        lname: student.lname,
        fname: student.fname,
        phone: student.phone,
        email: student.email,
        bio: "",
        password: student.password,
      });
    }
    res.status(200).json("successfully imported students");
  } catch (error) {
    res.status(400).json({ error: e.message });
  }
});
router.post("/register", () => {});
router.post("/login", () => {});

//put
router.put("/edit", () => {});

//patch
router.patch("/change-password", () => {});

module.exports = router;
