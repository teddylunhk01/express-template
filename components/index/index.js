import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
    res.send('ok')
})

export default router
