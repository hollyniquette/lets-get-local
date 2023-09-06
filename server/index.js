require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
// const { startStandaloneServer } = require("@apollo/server/standalone");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const { resolvers } = require("./resolvers.js");
const { typeDefs } = require("./models/typeDefs.js");
const { default: mongoose } = require("mongoose");

const mongo_uri = `mongodb+srv://root:${process.env.PASSWORD}@${process.env.MONGO_URL}`;

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server.applyMiddleware({
  path: "../client/dist",
  app,
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

mongoose
  .connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB Atlas");
    await server.start();
    app.use(
      "/graphql",
      cors(),
      bodyParser.json({ limit: "50mb" }),
      expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
      })
    );
    await new Promise((resolve) =>
      httpServer.listen({ port: process.env.PORT || 4000 }, resolve)
    );
    // startStandaloneServer(server, {
    //   listen: { port: process.env.PORT || 4000 },
    // }).then(({ url }) => {
    //   console.log(`Server ready at ${url}`);
    // });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas");
    console.log("Error: ", err.message);
    console.log("Shutting down server");
  });
