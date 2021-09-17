const knex = require('knex')
const database = require('./database/Database')

module.exports = {
    allTrails() {
        return database('trails')
    },

    findTrail(trailId) {
        return database('trails')
            .where({ id: trailId})
    },

    createTrail(trailObj) {
        return database('trails')
            .insert(trailObj)
            .returning('*')
    },

    updateTrail(trailId, trailObj) {
        return database('trails')
            .where({ id: trailId })
            .update(trailObj)
    },

    deleteTrail(trailId) {
        return database('trails')
            .where({ id: trailId })
            .del()
    },

    createMultipleTrails(trailArray) {
        return 
    }
}