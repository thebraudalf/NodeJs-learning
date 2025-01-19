// importing mongoose module
import mongoose from "mongoose";

// mongoose.Schema() is used to define the schema which maps to MongoDB collection and also defines the shape of the document with that collection.
// timestamps property is used to represent date when the document was created(createdAt) and also when the document was last updated(updatedAt) 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// mongoose.model() is used to define model according to defined schemas
export const User = mongoose.model("User", userSchema);

/* This can be asked in interviews 
The MongoDB follows a standard practice in which the name of the model which defined in mongoose will be going to lowercase and adds small capital "s" after the model name */
