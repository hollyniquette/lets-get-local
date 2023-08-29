const { Event } = require('./models/Event');
const { User } = require('./models/User');

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
        category,
      } = args;
      const event = new Event({
        name,
        description,
        date,
        beginTime,
        endTime,
        location,
        image,
        category,
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
        category,
      } = args;
      const event = await Event.findByIdAndUpdate(id, {
        name,
        description,
        date,
        beginTime,
        endTime,
        location,
        image,
        category,
        updatedAt: new Date().toISOString(),
      });
      return event;
    },
    deleteEvent: async (parent, args) => {
      const { id } = args;
      const event = await Event.findByIdAndDelete(id);
      return event;
    },
    createUser: async (parent, args) => {
      const { username, password, email } = args;
      const user = new User({
        username,
        password,
        email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      await user.save();
      return user;
    },
  },
};

module.exports = { resolvers };
