import mongoose from "mongoose";

const {Schema} = mongoose;

const objectSchema = new Schema({
    astro_id: {type: String, required: true},
    visited: {type: Boolean, default: false},
    visit_date: {type: Date},
    priority: {type: Number, default: 5}
},{
    timestamps: true
})

const Object = mongoose.model("Object", objectSchema);
export default Object;