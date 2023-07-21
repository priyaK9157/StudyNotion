// Import the required modules
const express = require("express")
const router = express.Router()

// const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
router.post("/capturePayment", auth, isStudent)
router.post("/verifyPayment",auth, isStudent)
router.post("/sendPaymentSuccessEmail", auth, isStudent );

module.exports = router