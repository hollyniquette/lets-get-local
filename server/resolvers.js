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
      const { name, description, date, time, location, image, category } = args;
      const event = new Event({
        name,
        description,
        date,
        time,
        location,
        image,
        category,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      await event.save();
      return event;
    },
  },
};

module.exports = { resolvers };
