const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);  // Stripe secret key
const verifyToken = require("../middleware/verifyToken"); // Import the token verification middleware
const User = require("../models/User");  // Assuming you have a User model
const router = express.Router();  // Initialize the router

// Payment Route
router.post("/payment", verifyToken, async (req, res) => {
  const { amount, paymentMethodId } = req.body;  // Payment details from the request body

  if (!amount || !paymentMethodId) {
    return res.status(400).json({ success: false, message: "Amount and payment method ID are required." });
  }

  try {
    // Accessing user from the verified token
    const userId = req.user.id;  // Assuming user ID is stored in the token payload
    const user = await User.findById(userId); // Find the user in the database

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    // Log user payment or update user's past payment data
    user.paymentMethods.push(paymentMethodId);  // Example of updating user's payment method history
    await user.save();

    // Create a PaymentIntent on Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,  // Convert amount to cents (Stripe works with cents)
      currency: "usd",  // You can change this to your currency
      payment_method: paymentMethodId,  // Payment method ID received from the frontend
      confirmation_method: "manual",  // Set confirmation method as manual (can be later confirmed if needed)
      confirm: true,  // Immediately confirm the payment
    });

    res.status(200).json({ success: true, message: "Payment successful", paymentIntent });
  } catch (err) {
    console.error("Error processing payment:", err);
    res.status(500).json({ success: false, message: "Error processing payment" });
  }
});

module.exports = router;  // Export the router
