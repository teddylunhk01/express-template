import express from 'express'
import jwt from 'jsonwebtoken'
import QRCode from 'qrcode'
import uuid from 'uuid/v4'
let router = express.Router()

router.post('/', (req, res, next) => {
    const { name, amount } = req.body
    let payload = {
        name,
        merchantID: uuid(),
        amount
    }
    let token = jwt.sign(payload, 'SECRET_KEY')
    QRCode.toDataURL(token, function(err, url){
        res.send(url)
    })
})

module.exports = router