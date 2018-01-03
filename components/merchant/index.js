import express from 'express'
import QRCode from 'qrcode'
import uuid from 'uuid/v4'
import jwt from 'jsonwebtoken'
import {sendError} from '../../utils/errorChecker'
require('dotenv').config()
const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        const { name, amount } = req.body
        if (name && amount) {
            let payload = {
                name,
                merchantID: uuid(),
                amount
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY)
            res.json({
                qrcodeImage: await QRCode.toDataURL(token)
            })
        } else if (!name) {
            sendError(res, {
                status: 400,
                type: 'Bad request: missing name field.',
                body: req.body
            })
           
        } else if (!amount) {
            sendError(res, {
                status: 400,
                type: 'Bad request: missing amount field.',
                body: req.body
            })
        }
    } catch (err) {
        res.status(err.status || 500)
        res.send(err)
    }
})

export default router
