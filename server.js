const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Array to simulate in-memory storage
const users = [];

// Endpoint to handle user registration
app.post('/signup', (req, res) => {
    const { fName, lName, email, password, confirmpassword } = req.body;

    // Perform server-side validation (you may want to enhance this)
    if (!fName || !lName || !email || !password || !confirmpassword) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== confirmpassword) {
        return res.status(400).json({ error: "Password doesn't match" });
    }

    // Store the user in the array (this is just for demonstration)
    const newUser = { fName, lName, email, password };
    users.push(newUser);

    res.json({ message: 'User registered successfully' });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Perform server-side validation (you may want to enhance this)
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find the user in the array (this is just for demonstration)
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Endpoint to retrieve all users (for demonstration purposes)
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
