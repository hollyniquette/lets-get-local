require('dotenv').config();
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { resolvers } = require('./resolvers.js');
const { typeDefs } = require('./models/typeDefs.js');
const { default: mongoose } = require('mongoose');

const mongo_uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.MONGO_URL}`;

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    startStandaloneServer(server, {
      listen: { port: 4000 },
    }).then(({ url }) => {
      console.log(`Server ready at ${url}`);
    });
  })
  .catch((err) => {
    console.log('Error: ', err.message);
  });
