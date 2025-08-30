const{model} = require("mongoose")

const {PositionsSchema} = require('../schemas/PositionsSchema');


const PositionsHolding =  model('position',PositionsSchema);

module.exports = PositionsHolding;