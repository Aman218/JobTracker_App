import mongoose  from "mongoose";
const {Schema} = mongoose;

let jobSchema=new Schema({
    company: String,
    role: String,
    status: String,
    applicationDate: String, 
    link: String,
    notes: String
})
let jobApplication=new mongoose.model('jobApplication',jobSchema);
export default jobApplication;