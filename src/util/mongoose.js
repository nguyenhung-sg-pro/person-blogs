module.exports = {
    mutileMongooseToObject: (mongoose) => {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: (mongoose) => mongoose ? mongoose.toObject() : mongoose
}