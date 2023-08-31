import Navbar from "./Navbar"
import PostH from "./Post"

const data = [
    {
        title: 'Cat Adoption Fair',
        image: 'public/images/auto_720.jpg',
        date: 'March 27, 2024',
        time: '11:00 AM - 3:00 PM',
        description: 'A fair featuring adoptable cats from local shelters.',
        location: '20 Elm St, Kansas City, MO',
    },
    {
        title: 'Classic Car Show',
        image: 'public/images/auto_720.jpg',
        date: 'October 15, 2023',
        time: '10:00 AM - 4:00 PM',
        description: 'A gathering of vintage automobiles showcasing their unique designs and historical significance.',
        location: '2 Memorial Dr, Kansas City, MO',
    },
    {
        title: ' Basketball Tournament',
        image: 'public/images/auto_720.jpg',
        date: 'November 20, 2023',
        time: '9:00 AM - 6:00 PM',
        description: 'A competitive basketball tournament featuring teams from the local community.',
        location: '11820 N Rose Dr, Kansas City, MO',
    },
    {
        title: 'Movie Night in the Park',
        image: 'public/images/auto_720.jpg',
        date: 'December 5, 2023',
        time: '7:30 PM - 10:00 PM',
        description: 'An outdoor screening of a family-friendly movie under the stars.',
        location: '4600 Oak St, Kansas City, MO',
    },
    {
        title: 'Science Fair',
        image: 'public/images/auto_720.jpg',
        date: 'November 10, 2023',
        time: '9:00 AM - 3:00 PMm',
        description: 'A showcase of innovative and educational science projects created by students.',
        location: 'Union Station Kansas City, 30 W Pershing Rd, Kansas City, MO',
    },
    {
        title: 'Dog Agility Competition',
        image: 'public/images/auto_720.jpg',
        date: 'September 30, 2023',
        time: '10:00 AM - 2:00 PM',
        description: 'Watch skilled dogs and their trainers navigate challenging agility courses.',
        location: '501 Barkley Pkwy, Kansas City, MO',
    },
    {
        title: 'Tennis Tournament',
        image: 'public/images/auto_720.jpg',
        date: 'November 18, 2023',
        time: '8:00 AM - 6:00 PM',
        description: 'Local tennis tournament for tennis enthusiasts of all skill levels',
        location: '4747 J C Nichols Pkwy, Kansas City, MO',
    },    {
        title: 'Astronomy Lecture',
        image: 'public/images/auto_720.jpg',
        date: 'September 22, 2023',
        time: '6:30 PM - 8:00 PM',
        description: 'An educational talk on the wonders of the universe and stargazing tips.',
        location: '456 Star Avenue, Kansas City, KS',
    },
    {
        title: 'Yoga in the park',
        image: 'public/images/auto_720.jpg',
        date: 'September 30, 2023',
        time: '10:00 - 11:30 AM',
        description: 'Outdoor yoga session for all levels of practitioners, surrounded by nature.',
        location: 'Butterfly Park, 5200 Wornall Rd, Kansas City, MO',
    }
];

export default function HomePage() {

    return(
        <>
            <Navbar/>
            <div className="homePostBox">
            {data.map((item, i) => <PostH data={item} key={i} />)}
            </div>
        </>
    )

}