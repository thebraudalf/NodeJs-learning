import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    treatments: {
        type: String,
        required: true
    },
    isTestDone: {
        type: Boolean,
        required: true
    },
    testDescription: {
        type: String,
        required: true
    }
}, { timestamps: true });


export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
