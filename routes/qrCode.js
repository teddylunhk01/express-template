var express = require('express')
var jwt = require('jsonwebtoken')
var QRCode = require('qrcode')
var uuid = require('uuid/v4')
var router = express.Router()

router.post('/', function(req, res, next) {
    const { name, amount } = req.body
    var payload = {
        name,
        merchantID: uuid(),
        amount
    }
    var token = jwt.sign(payload, 'SECRET_KEY')
    QRCode.toDataURL(token, function(err, url){
        res.send(url)
    })
})

module.exports = router