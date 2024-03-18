const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route for /bfhl endpoint
app.post('/bfhl', (req, res) => {
  try {
    // Extract data array from request body
    const data = req.body.data;

    // Extracting required information
    const userId = "john_doe_17091999";
    const email = "john@xyz.com";
    const rollNumber = "ABCD123";

    // Filter even and odd numbers, and alphabets
    const evenNumbers = data.filter(num => parseInt(num) % 2 === 0);
    const oddNumbers = data.filter(num => parseInt(num) % 2 !== 0);
    const alphabets = data.filter(char => isNaN(parseInt(char)));

    // Convert alphabets to uppercase
    const alphabetsUpperCase = alphabets.map(char => char.toUpperCase());

    // Prepare response object
    const response = {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      even_numbers: evenNumbers,
      odd_numbers: oddNumbers,
      alphabets: alphabetsUpperCase
    };

    // Send response
    res.json(response);
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(⁠ Server is running on port ${PORT} ⁠);
});
