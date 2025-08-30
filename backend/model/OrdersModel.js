const{model} = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrderModel = model('order',OrdersSchema);

module.exports= {OrderModel};