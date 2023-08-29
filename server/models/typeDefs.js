const gql = require('graphql-tag');

const typeDefs = gql`
  enum Type {
    AUTOMOTIVE
    SPORTS
    ENTERAINMENT
    EDUCATION
    PETS
    OTHER
  }

  type Event {
    id: ID
    name: String
    description: String
    date: String
    beginTime: String
    endTime: String
    location: String
    image: String
    type: Type
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
      beginTime: String
      endTime: String
      location: String
      image: String
      type: Type!
    ): Event
    updateEvent(
      id: ID!
      name: String
      description: String
      date: String
      beginTime: String
      endTime: String
      location: String
      image: String
      type: Type
    ): Event
    deleteEvent(id: ID!): Event

    createUser(username: String!, password: String!, email: String): User
    updateUser(id: ID!, username: String, password: String, email: String): User
    deleteUser(id: ID!): User
  }
`;

module.exports = { typeDefs };
