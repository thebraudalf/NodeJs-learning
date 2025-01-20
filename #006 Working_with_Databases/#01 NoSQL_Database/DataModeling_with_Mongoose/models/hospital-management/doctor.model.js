import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        default: 0
    },
    worksAt: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
    ],

}, { timestamps: true });


export const Doctor = mongoose.model("Doctor", doctorSchema);
