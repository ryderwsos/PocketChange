import mongoose, { Schema } from 'mongoose';

const promptSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Prompt = mongoose.models.Prompt || mongoose.model('Prompt', promptSchema);

export default Prompt;