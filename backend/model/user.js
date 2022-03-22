const mongoose = require("mongoose")
const {composeWithMongoose} = require("graphql-compose-mongoose")
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: String,
        email: String,
        phone: String,
        profileImage: String
    }
)


module.exports = {
    UserSchema: mongoose.model("users", User),
    UserTC: composeWithMongoose(mongoose.model("users", User))
}