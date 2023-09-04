import AutomotiveTag from "./Tags/AutomotiveTag";
import EducationalTag from "./Tags/EducationalTag";
import PetsTag from "./Tags/PetsTag";
import EntertainmentTag from "./Tags/EntertainmentTag";
import SportsTag from "./Tags/SportsTag";
import OtherTag from "./Tags/OtherTag";

export default function PostH(props) {
  const { eventName, eventDescription, eventLocation, eventType, eventImage, eventDate, eventTime} =
    props;

    let type = '';
    switch (eventType) {
      case 'AUTOMOTIVE':
        type = <AutomotiveTag/>;
        break;
      case 'EDUCATION':
        type = <EducationalTag/>;
        break;
      case 'PETS':
        type = <PetsTag/>;
        break;
      case 'ENTERAINMENT':
        type = <EntertainmentTag/>;
        break;
      case 'SPORTS':
        type = <SportsTag/>;
        break;
      case 'OTHER':
        type = <OtherTag/>;
        break;
    }

  return (
    <>
      <div className="homePost">
        <h2>{eventName}</h2>
        <div>
          {type}
        </div>
        <img src={`public/images/${eventImage}.jpg`} />
        <p>{eventDescription}</p>
        <p>{`Event is on ${eventDate} @ ${eventTime}`}</p>
        <p>{`Location: ${eventLocation}`}</p>
      </div>
    </>
  );
}
