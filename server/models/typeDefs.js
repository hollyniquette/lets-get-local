const gql = require('graphql-tag');

const typeDefs = gql`
  type Event {
    id: ID
    name: String
    description: String
    date: String
    time: String
    location: String
    image: String
    category: String
    createdAt: String
    updatedAt: String
  }

  type User {
    id: ID
    username: String
    password: String
    email: String
    loggedIn: Boolean
    createdAt: String
    updatedAt: String
  }

  type Query {
    greetings: String
    events: [Event]
    event(id: ID!): Event
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createEvent(
      name: String!
      description: String
      date: String!
      time: String
      location: String
      image: String
      category: String!
    ): Event
    updateEvent(
      id: ID!
      name: String
      description: String
      date: String
      time: String
      location: String
      image: String
      category: String
    ): Event
    deleteEvent(id: ID!): Event

    createUser(username: String!, password: String!, email: String): User
    updateUser(id: ID!, username: String, password: String, email: String): User
    deleteUser(id: ID!): User
  }
`;

module.exports = { typeDefs };
