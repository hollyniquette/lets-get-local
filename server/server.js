require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { resolvers } = require("./resolvers.js");
const { typeDefs } = require("./models/typeDefs.js");

const server = new ApolloServer({ typeDefs, resolvers });
const mongo_uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.URL}`;

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
