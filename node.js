const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

    res.json({
        is_success: true,
        user_id: "Nishant_26022003",
        email: "starkcastic3000@gmail.com",
        roll_number: "22BCS10430",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
