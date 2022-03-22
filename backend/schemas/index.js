const { SchemaComposer } = require ( 'graphql-compose')

const {UserQuery, UserMutation} = require('./user')
const {BookQuery, BookMutation} = require('./books');



const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...UserQuery,
    ...BookQuery,
    ...UserMutation,
    ...BookMutation,
});


module.exports = schemaComposer.buildSchema();