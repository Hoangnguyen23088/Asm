const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema = collection
const ObjectId = Schema.ObjectId;
const user = new Schema({
    id: { type: ObjectId }, // khóa chính
    username: { type: String,required:true },
    password: { type: String,required:true },
    fullname: { type: String,required:true },
    old: {type: Number, required:true}
});
module.exports = mongoose.models.user || mongoose.model("user", user);
