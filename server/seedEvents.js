//Its a start
require('dotenv').config();
const { Event } = require('./models/Event');
const mongoose = require('mongoose');

const mongo_uri = `mongodb+srv://root:${process.env.PASSWORD}@${process.env.MONGO_URL}`;

const events = [
  new Event({
    name: 'Yoga in the park',
    description:
      'Outdoor yoga session for all levels of practitioners, surrounded by nature.',
    date: 'September 30, 2023',
    beginTime: '9:00AM',
    endTime: '10:30AM',
    location: 'Butterfly Park, 5200 Wornall Rd, Kansas City, MO',
    //image: "",
    type: 'SPORTS',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Classic Car Show',
    description:
      'A gathering of vintage automobiles showcasing their unique designs and historical significance.',
    date: 'September 15, 2023',
    beginTime: '10:00 AM',
    endTime: '4:00 PM',
    location: '2 Memorial Dr, Kansas City, MO',
    //image: "",
    type: 'AUTOMOTIVE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Basketball Tournament',
    description:
      'A competitive basketball tournament featuring teams from the local community',
    date: 'November 20, 2023',
    beginTime: '9:00 AM',
    endTime: '6:00 PM',
    location: '11820 N Rose Dr, Kansas City, MO',
    //image: "",
    type: 'SPORTS',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Movie Night in the Park',
    description:
      ' An outdoor screening of a family-friendly movie under the stars.',
    date: 'December 5, 2023',
    beginTime: '7:30 PM',
    endTime: '10:00 PM',
    location: '4600 Oak St, Kansas City, MO',
    //image: "",
    type: 'ENTERTAINMENT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Science Fair',
    description:
      'A showcase of innovative and educational science projects created by students.',
    date: 'November 10, 2023',
    beginTime: '9:00 AM',
    endTime: '3:00 PM',
    location: 'Union Station Kansas City, 30 W Pershing Rd, Kansas City, MO',
    //image: "",
    type: 'EDUCATION',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Pet Adoption Day',
    description:
      'An event where local animal shelters bring adorable pets available for adoption.',
    date: 'December 12, 2023',
    beginTime: '11:00 AM',
    endTime: '3:00 PM',
    location: '7077 Elmwood Ave, Kansas City, MO',
    //image: "",
    type: 'PETS',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Live Concert: Jazz Under the Stars',
    description:
      'A night of live jazz music featuring local musicians in an open-air setting.',
    date: 'September 12, 2023',
    beginTime: '7:00 PM',
    endTime: '11:00 PM',
    location: 'Almond Park, 1 E 47th St, Kansas City, MO',
    //image: "",
    type: 'ENTERTAINMENT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Coding Workshop for Kids',
    description: 'An educational workshop teaching coding basics to children.',
    date: 'November 5, 2023',
    beginTime: '2:00 PM',
    endTime: '4:00 PM',
    location: '4801 Main St, Kansas City, MO',
    //image: "",
    type: 'EDUCATION',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Dog Agility Competition',
    description:
      'Watch skilled dogs and their trainers navigate challenging agility courses.',
    date: 'September 8, 2023',
    beginTime: '10:00 AM',
    endTime: '2:00 PM',
    location: '501 Berkley Pkwy, Kansas City, MO',
    //image: "",
    type: 'PETS',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Auto Racing Championship',
    description:
      'High-speed auto racing featuring professional drivers and various car classes.',
    date: 'October 14, 2023',
    beginTime: '1:00 PM',
    endTime: '5:00 PM',
    location: '400 Speedway Blvd, Kansas City, KS',
    //image: "",
    type: 'AUTOMOTIVE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Tennis Tournament',
    description:
      'Local tennis tournament for tennis enthusiasts of all skill levels.',
    date: 'November 18, 2023',
    beginTime: '8:00 AM',
    endTime: '6:00 PM',
    location: '4747 J C Nichols Pkwy, Kansas City, MO',
    //image: "",
    type: 'SPORTS',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Movie Trivia Night',
    description:
      'Test your film knowledge with a fun movie trivia night at a local pub.',
    date: 'November 3, 2023',
    beginTime: '7:30 PM',
    endTime: '10:00 PM',
    location: '123 Movie Street, Kansas City, MO',
    //image: "",
    type: 'ENTERTAINMENT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Astronomy Lecture',
    description:
      'An educational talk on the wonders of the universe and stargazing tips.',
    date: 'September 22, 2023',
    beginTime: '6:30 PM',
    endTime: '8:00 PM',
    location: '456 Star Avenue, Kansas City, KS',
    //image: "",
    type: 'EDUCATION',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Pet Costume Parade',
    description: 'A playful parade of pets dressed in creative costumes.',
    date: 'October 29, 2023',
    beginTime: '2:00 PM',
    endTime: '4:00 PM',
    location: '789 Cat Lane, Kansas City, MO',
    //image: "",
    type: 'PETS',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Vintage Motorcycle Show',
    description: 'Showcasing rare and classic motorcycles from different eras.',
    date: 'September 8, 2023',
    beginTime: '10:00 AM',
    endTime: '3:00 PM',
    location: '101 Lala Road, Kansas City, MO',
    //image: "",
    type: 'AUTOMOTIVE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
  new Event({
    name: 'Soccer Championship Finals',
    description:
      'The culmination of a local soccer league with exciting finals matches.',
    date: 'November 19, 2023',
    beginTime: '1:00 PM',
    endTime: '5:00 PM',
    location: '567 Soccer Drive, Kansas City, MO',
    //image: "",
    type: 'SPORTS',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
];

const seedEvents = async () => {
  try {
    await mongoose
      .connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(async () => {
        console.log('mongodb connected');
        await Event.deleteMany();
        await Event.bulkSave(events);
        console.log('Database seeded successfully');
      })
      .finally(async () => {
        await mongoose.disconnect();
      });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedEvents();
