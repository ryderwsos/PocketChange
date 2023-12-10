import mongoose, { Schema } from 'mongoose';

const categorySchme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    }
})

const Category = mongoose.models.Category || mongoose.model('Category', categorySchme)

export default Category;