var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors');


// Construct a schema, using GraphQL schema language
// for more info go to https://graphql.org/graphql-js/running-an-express-graphql-server/
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use(cors()) //enable cors for all requests - THIS IS UNSAFE

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(3001);