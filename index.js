//CDA Deployment 1

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App</h1>`);
});

app.listen(PORT, () => {
    res.send(`app running on port ${PORT}`);
});