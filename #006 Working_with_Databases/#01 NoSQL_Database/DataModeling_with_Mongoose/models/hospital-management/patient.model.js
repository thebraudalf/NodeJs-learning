import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    admittedAt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    patientAddress: {
        type: String,
        required: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    patientBloodGroup: {
        type: String,
        required: true
    },
    patientGender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    }
}, { timestamps: true });


export const Patient = mongoose.model("Patient", patientSchema);
