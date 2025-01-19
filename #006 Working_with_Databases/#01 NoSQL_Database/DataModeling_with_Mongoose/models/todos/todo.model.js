import mongoose from "mongoose";

// mongoose.Schema.Types.ObjectId is a special type typically used for unique identifiers
// ref is used as a reference to take information from another schema of a another model 
const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        },
    ] // Array of Sub-Todos
}, {timestamps: true});


export const Todo = mongoose.model("Todo", todoSchema);