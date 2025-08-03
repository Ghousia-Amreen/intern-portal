const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/user', (req, res) => {
  res.json({
    name: "Ghousia Amreen",
    referralCode: "Ghousia2025",
    totalDonations: 1000,
    rewards: ["T-shirt", "Badge", "Gift Card"]
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
