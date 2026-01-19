import { model, Schema } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is require'],
        minLength: [8, 'Title must be atleast 8 characters'],
        maxLength: [50, 'title should be max 50 characters']
    },
    description: {
        type: String,
        required: [true, 'description is require'],
        minLength: [8, 'description must be atleast 8 characters'],
        maxLength: [200, 'description should be max 200 characters']
    },
    category: {
        type: String,
        required: [true, 'category is require'],

    },
    thumbnail: {
        public_id: {
            type: String,
            required: true
        },
        secure_url: {
            type: String,
            required: true
        }
    },
    language: {
        type: String,
        default: 'ENGLISH',
        enum: ['HINGLISH', 'ENGLISH', 'HINDI']
    },
    price: {
        type: Number,
    },
    level: {
        type: String,
        default: 'BEGINNER',
        enum: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED']
    },
    whatYouWillLearn: [String],
    instructor:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:'true'
    },
    lectures: [
        {
            title: String,
            description: String,
            lecture: {
                public_id: {
                    type: String,
                    required: true
                },
                secure_url: {
                    type: String,
                    required: true
                }
            }
        }
    ],
    numberOfLectures: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
})

const Course = model('course', courseSchema, 'courses')

export default Course