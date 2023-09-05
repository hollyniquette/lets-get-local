import Navbar from "./Navbar"
import PostP from "./PostP"
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { EVENTS } from "../../queries";

export default function ProfilePage() {
    const { loading, error, data } = useQuery(EVENTS);

    return(
        <>
            <Navbar/>
            <h1>Profile</h1>
            <Link to="newevent">
                <button>Create New Event</button>
            </Link>
            <div className="homePostBox">
                {data?.events?.map((event, index) => {
                    return (
                        <PostP
                            eventName={event.name}
                            eventDescription={event.description}
                            eventLocation={event.location}
                            eventType={event.type}
                            eventImage={event.image}
                            eventDate={event.date}
                            eventTime={event.beginTime}
                            eventID={event.id}
                        />
                    );
                })}
            </div>
        </>
    )

}