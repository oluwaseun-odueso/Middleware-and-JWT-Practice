const express = require('express')
const app = express()

app.use(log)

// Home page route
app.get('/', (req, res, next) =>{
    console.log('Home page running')
    res.send('This is our home page.')
    next()
})

// Users page route
app.get('/users', (req, res) => {
    console.log('Users page running')
    res.send('This is the users page')
})

// Middleware function
function log(req, res, next) {
    next()
    console.log('after')
}

// Specific to a single action
function auth(req, res, next) {
    if (req.query.admin === 'true') {
        req.admin = true
        next()
        return 
    }
    res.send('No auth')
}

// To start listening to the server
app.listen(4000)