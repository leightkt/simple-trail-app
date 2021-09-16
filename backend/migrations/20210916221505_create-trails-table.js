
exports.up = (knex) => {
    return knex.schema.createTable('trails', (table) => {
        table.increments()
        table.string('name')
        table.string('url')
        table.string('thumbUrl')
        table.float('length')
        table.integer('elevationGain')
        table.string('description', 1000)
    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('trails')
};
