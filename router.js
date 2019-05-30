const express = require('express')

const router = express.Router()

const ctrl = require('./webhooks.js')

router.post('/webhooks', ctrl.webhooks)

module.exports = router