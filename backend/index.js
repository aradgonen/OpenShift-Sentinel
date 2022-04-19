const express = require("express");
const mongoose = require("mongoose");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const { graphqlHTTP } = require("express-graphql");
var cors = require('cors');
const { request } = require("express");
const greetings = [
    {
        name: "hello",
        id: 1
    },
    {
        name: "bye",
        id:2
    }
]

const schema = makeExecutableSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      greetings(id:Int): Greeting,
      yoav: Int
    }
    type Greeting {
        name: String,
        id: Int
    }
  `,
  resolvers: {
    Query: {
      greetings(_,{id}){
          console.log(this);
          return greetings.find(greet => greet.id === id)
      },
      yoav: () => 69
    }
  }
});

const defaultQuery = /* GraphQL */ `
  query exampleQuery {
    greeting
  }
`;

const graphqlSchema = require("./schemas/index");
const app = express();
app.use('/graphql',
  graphqlHTTP((request) => {
    return {
     graphiql: true,
     schema: graphqlSchema
    }
  })
);

app.use(cors());
app.listen(4000, async () => {
  console.info("Listening on http://localhost:4000");
  await mongoose.connect("mongodb://localhost:27017/SentinalDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);