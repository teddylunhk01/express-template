import express from 'express'
import QRCode from 'qrcode'
import uuid from 'uuid/v4'
import jwt from 'jsonwebtoken'
require('dotenv').config()
const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        const { name, amount } = req.body
        let payload = {
            name,
            merchantID: uuid(),
            amount
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY)
        res.json({
            qrcodeImage: await QRCode.toDataURL(token)
        })
    } catch (err) {
        res.status(err.status || 500)
        res.send(err)
    }
})

export default router
