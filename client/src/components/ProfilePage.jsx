import Navbar from "./Navbar"
import PostP from "./PostP"
import { Link } from 'react-router-dom';

export default function ProfilePage() {

    return(
        <>
            <Navbar/>
            <h1>Profile</h1>
            <Link to="newevent">
                <button>Create New Event</button>
            </Link>
            <div className="homePostBox">
                <PostP/>
            </div>
        </>
    )

}