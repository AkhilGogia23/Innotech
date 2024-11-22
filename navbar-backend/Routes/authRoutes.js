    const express = require("express");
    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");
    const User = require("../models/User"); // Assuming you have a User model
    const router = express.Router();

    // User Signup Route
    router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ success: false, message: "User already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ success: true, message: "User created successfully." });
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ success: false, message: "Error creating user." });
    }
    });

    // User Signin Route
    router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(404).json({ success: false, message: "User not found." });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid credentials." });
        }

        // Generate JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ success: true, token });
    } catch (err) {
        console.error("Error during signin:", err);
        res.status(500).json({ success: false, message: "Error during signin." });
    }
    });

    module.exports = router;
