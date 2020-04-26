import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ItemSchema = new Schema({
    sideDishes: {
        type: String
    },
    braskfast: {
        type: String
    },
    lunch: {
        type: String
    },
    dinner: {
        type: String
    }
});
