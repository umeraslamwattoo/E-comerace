const express = require('express');
const { signupAdmin, loginAdmin, showsignupadmin, deleteAdmin } = require('../Controoler/AdminFunction');
const { signupUser, loginUser, showsignupuser, deleteuser } = require('../Controoler/UserFunction');
const { createHelp, showHelp, deleteHelp } = require('../Controoler/HelpFunvction');

const router = express.Router();

// Routing for Signup/Login Admin Table

router.post('/adminSignup', signupAdmin)
router.post('/adminLogin', loginAdmin) 
router.get('/admin', showsignupadmin)
router.delete('/admin/:id', deleteAdmin);


// Routing for Signup/login User Table

router.post('/userSignup', signupUser)
router.post('/userLogin', loginUser)
router.get('/user', showsignupuser)
router.delete('/user/:id', deleteuser)

// Routing for HelpCenter 

router.post('/helpcenter', createHelp)
router.get('/helpcenter' , showHelp)
router.delete('/helpcenter/:id', deleteHelp)

module.exports = router;