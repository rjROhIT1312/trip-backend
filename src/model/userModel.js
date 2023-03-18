const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age:{type: Number,required:true},
    gender:{type:String,required:true,enum: ["Male", "Female", "Other"]},
    email: { type: String, required: true, unique: true, trim: true },
    phone: { type: Number, required: true, unique: true, trim: true },
    other:{type:String,trim:true},
    
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)