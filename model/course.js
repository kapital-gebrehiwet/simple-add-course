import mongoose, { Schema } from 'mongoose';

const Courseschema = new Schema(
    {
        title: { 
            type: String,
            required: [true, 'name is required']
        },
        description: { 
            type: String,
            required: [true, 'course description is required']
        }
    },
    {
        timestamps: true // This option should be in the second argument of the Schema constructor
    }
);

const course=mongoose.models.course||mongoose.model('course',Courseschema)
export default course;