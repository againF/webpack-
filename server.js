const express = require('express');
const app = express();
const port = 8000;
app.get('/api/user', (req, res) => {
    res.json("Alan");
});
app.listen(port, () => {
    console.log(`Listing on port ${port}`);
});