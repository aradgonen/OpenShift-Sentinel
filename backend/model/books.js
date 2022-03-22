const mongoose = require("mongoose")
const {composeWithMongoose} = require("graphql-compose-mongoose")
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title: String,
        author: [String],
        cover: String,
        tags: [String]
    }
)


module.exports = {
    BookSchema : mongoose.model("books", BookSchema ),
    BookTC: composeWithMongoose(mongoose.model("books", BookSchema))
}