
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
var cors = require('cors');
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

const app = express();
app.use('/graphql',
  graphqlHTTP({
    schema,
    graphiql: {
      defaultQuery
    }
  })
);
app.use(cors());
app.listen(4000, () => {
  console.info("Listening on http://localhost:4000");
});