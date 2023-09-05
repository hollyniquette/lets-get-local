import AutomotiveTag from "./Tags/AutomotiveTag";
import EducationalTag from "./Tags/EducationalTag";
import PetsTag from "./Tags/PetsTag";
import EntertainmentTag from "./Tags/EntertainmentTag";
import SportsTag from "./Tags/SportsTag";
import OtherTag from "./Tags/OtherTag";

import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { DELETE_EVENT } from "../../mutations";

export default function PostP(props) {
  const { eventName, eventDescription, eventLocation, eventType, eventImage, eventDate, eventTime, eventID} =
    props;

    let type = '';
    let image = '';
    switch (eventType) {
      case 'AUTOMOTIVE':
        type = <AutomotiveTag/>;
        image = 'auto_720.jpg';
        break;
      case 'EDUCATION':
        type = <EducationalTag/>;
        image = 'education_720.jpg';
        break;
      case 'PETS':
        type = <PetsTag/>;
        image = 'pets_720.jpg';
        break;
      case 'ENTERAINMENT':
        type = <EntertainmentTag/>;
        image = 'entertainment_720.jpg';
        break;
      case 'SPORTS':
        type = <SportsTag/>;
        image = 'sport_720.jpg';
        break;
      case 'OTHER':
        type = <OtherTag/>;
        image = 'other_720.png';
        break;
    }

    const [DeleteEvent, { error }] = useMutation(DELETE_EVENT, {
    });

    const handleFormSubmit = async (eventid) => {
  
      try {
        // Important for useMutation: Here we want the mutation to occur in response to a form submission
        // The mutation we want to run also requires mutation parameters to be passed, which we deliver as a variables object
        const { data } = await DeleteEvent({
          variables: { deleteEventId: eventid,},
        });
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <>
      <div className="homePost">
        <h2>{eventName}</h2>
        <div>
          {type}
        </div>
        <img src={`public/images/${image}`} />
        <p>{eventDescription}</p>
        <p>{`Event is on ${eventDate} @ ${eventTime}`}</p>
        <p>{`Location: ${eventLocation}`}</p>
        <div>
            <Link to={`editevent/${eventID}`}>
                <button>EDIT</button>
            </Link>
            <button onClick={() => handleFormSubmit(eventID)}>DELETE</button>
        </div>
      </div>
    </>
  );
}