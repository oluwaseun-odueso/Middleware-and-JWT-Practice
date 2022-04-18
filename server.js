const express = require('express');
const jwt = require('jsonwebtoken');

const app = express()

app.get('/', (req, res) => {
    res.send({
        string: 'my api'
    });
});

app.post('/secured', (req, res) => {
    const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1fSwiaWF0IjoxNjUwMzE2NjI5fQ._B8NEEiNWf3f9zNqfO9tRQm0TKwGzWQz_BzONSR-bOE", 'secret-key')
    res.send({
        string: 'this is secured',
        data : decoded
    })
});

app.post('/login', (req, res) => {
    const user = { id: 5};
    const token = jwt.sign({ user }, 'secret_key');
    res.send({
        token: token
    })
})

app.listen(5000, () => {
    console.log('App listening on port 5000.')
})