const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
// const { getRooms, getToyById, addToy, updateToy, removeToy, addReview } = require('./room.controller')
const { getRooms} = require('./room.controller')
const router = express.Router()

router.get('/', log, getRooms)

module.exports = router