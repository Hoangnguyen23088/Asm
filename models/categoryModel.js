const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categorySchema = new Schema({
    name: { type: String, required: true } // Đảm bảo tên không bị rỗng
});

module.exports = mongoose.models.Category || mongoose.model("Category", categorySchema);
