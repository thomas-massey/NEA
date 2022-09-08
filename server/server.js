const express = require('express');
const app = express()

app.get('/api', (req, res) => {
    res.json({ message: 'Hello World!', date: new Date(), username: 'John Doe' });
});

app.listen(3001, () => console.log('Server listening on port 3001! Access me on http://localhost:3001/api'));