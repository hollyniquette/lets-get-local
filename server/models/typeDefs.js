const gql = require('graphql-tag');

const typeDefs = gql`
  enum Type {
    AUTOMOTIVE
    SPORTS
    ENTERTAINMENT
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
    token: String
    createdAt: String
    updatedAt: String
  }

  input RegisterInput {
    username: String
    password: String
    email: String
  }

  input LoginInput {
    email: String
    password: String
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

    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
    deleteUser(id: ID!): User
  }
`;

module.exports = { typeDefs };
