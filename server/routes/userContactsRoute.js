const express = require('express')
const router = express.Router();

const userContactController = require("../controllers/userContactController");

const authController = require("../controllers/authController");

router.post("/insertcontact", userContactController.createContact);
router.get("/getallcontacts", userContactController.getAllContacts);

//auth
router.post("/login", authController.verifyLogin);

module.exports = router;