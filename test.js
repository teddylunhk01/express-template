var jwt = require('jsonwebtoken');

// sign with RSA SHA256
var token = jwt.sign({ foo: 'hehe' }, 'SECRET_KEY')
console.log(token)

jwt.verify(token, 'SECRET_KEY', function(err,decoded) {
    console.log('err', err)
    console.log(decoded)
})