const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Mock data for flight prices
const flightPrices = {
    "Delhi-Jaipur": {
        "indigo": "₹1,614",
        "airAsia": "₹1,869",
        "vistara": "₹2,133"
    },
    // Add more routes as needed
};

app.get('/flights', (req, res) => {
    const { source, destination } = req.query;
    const key = `${source}-${destination}`;
    const prices = flightPrices[key] || { error: "No flights found for the given route." };
    res.json(prices);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});