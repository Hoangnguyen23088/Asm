const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const product = new Schema({
    id: {type: ObjectId}, // mã sản phẩm
    name: {type: String}, // tên sản phẩm
    price: {type: Number}, // giá
    quantity: {type: Number}, // số lượng
    category:{type: ObjectId, ref:"category"}
});

module.exports = mongoose.models.product || mongoose.model("product", product);
