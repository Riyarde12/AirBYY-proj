const roomService = require('./room.service.js')
const logger = require('../../service/logger.service')

// GET ROOM LIST

async function getRooms(req,res){
    try {
        var queryParams = req.query;
        const rooms = await roomService.query(queryParams)
        res.json(rooms)
    } catch (err) {
        logger.error('Failed to get rooms', err)
        res.status(500).send({ err: 'Failed to get rooms' })
    }

}

module.exports = {
    getRooms,
    // getToyById,
    // addToy,
    // updateToy,
    // removeToy
  }