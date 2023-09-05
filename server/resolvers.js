const { Event } = require('./models/Event');
const { User } = require('./models/User');
const { ApolloError } = require('apollo-server-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// GraphQL Resolvers
const resolvers = {
  Query: {
    greetings: () => "Let's get local!",
    events: async () => await Event.find(),
    users: async () => await User.find(),
    event: async (parent, args) => await Event.findById(args.id),
    user: async (parent, args) => await User.findById(args.id),
  },
  Mutation: {
    createEvent: async (parent, args) => {
      const {
        name,
        description,
        date,
        beginTime,
        endTime,
        location,
        image,
        type,
      } = args;
      const event = new Event({
        name,
        description,
        date,
        beginTime,
        endTime,
        location,
        image,
        type,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      await event.save();
      return event;
    },
    updateEvent: async (parent, args) => {
      const {
        id,
        name,
        description,
        date,
        beginTime,
        endTime,
        location,
        image,
        type,
      } = args;
      const event = await Event.findByIdAndUpdate(id, {
        name,
        description,
        date,
        beginTime,
        endTime,
        location,
        image,
        type,
        updatedAt: new Date().toISOString(),
      });
      return event;
    },
    deleteEvent: async (parent, args) => {
      const { id } = args;
      const event = await Event.findByIdAndDelete(id);
      return event;
    },
    async registerUser(_, { registerInput: { username, email, password } }) {
      // see if user already exists
      const oldUser = await User.findOne({ email });

      // throw error if so
      if (oldUser) {
        throw new ApolloError('Email already in use');
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // create new user
      const newUser = new User({
        username: username,
        password: hashedPassword,
        email: email.toLowerCase(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      // generate token
      const token = jwt.sign(
        { id: newUser.id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );

      // append token to newUser
      newUser.token = token;

      // save newUser to db
      await newUser.save();
      return newUser;
    },
    async loginUser(_, { loginInput: { email, password } }) {
      // see if user exists
      const user = await User.findOne({ email });

      // throw error if not
      if (!user) {
        throw new ApolloError('Email not found');
      }

      // check if password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      // throw error if not
      if (!isPasswordCorrect) {
        throw new ApolloError('Password is incorrect');
      }

      // generate token
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );

      // append token to user
      user.token = token;

      // update user in db
      await user.save();
      return user;
    },
  },
};

module.exports = { resolvers };
