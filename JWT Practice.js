const jwt = require('jsonwebtoken');

function generateToken(payload, signature) {
    return new Promise((resolve, reject) => {
        let token = jwt.sign({ payload }, signature)
        resolve(token)
    })
}

function verifyToken(token, secret_key) {
    return new Promise((resolve, reject) => {
        let decoded = jwt.verify(token, secret_key)
        resolve(decoded) 
    })
}

// Tests for synchronous functions
// console.log(verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1fSwiaWF0IjoxNjUwMzc3MjQyfQ.Qu7IHENvmtDyqKrjUTvI8pZL9WjtWpkPJR0szfnhMBg', 'secret_key'))
// console.log(verifyToken((generateToken({ id : 5}, 'secret_key')), 'secret_key'))
// console.log(generateToken({ id : 5}, 'secret_key'))