import AutomotiveTag from "./Tags/AutomotiveTag";
import EducationalTag from "./Tags/EducationalTag";
import PetsTag from "./Tags/PetsTag";
import EntertainmentTag from "./Tags/EntertainmentTag";
import SportsTag from "./Tags/SportsTag";
import OtherTag from "./Tags/OtherTag";

export default function PostH(props) {
  const {
    eventName,
    eventDescription,
    eventLocation,
    eventType,
    eventImage,
    eventDate,
    eventTime,
  } = props;

  let type = "";
  let image = "";
  switch (eventType) {
    case "AUTOMOTIVE":
      type = <AutomotiveTag />;
      image = "auto_720.jpg";
      break;
    case "EDUCATION":
      type = <EducationalTag />;
      image = "education_720.jpg";
      break;
    case "PETS":
      type = <PetsTag />;
      image = "pets_720.jpg";
      break;
    case "ENTERAINMENT":
      type = <EntertainmentTag />;
      image = "entertainment_720.jpg";
      break;
    case "SPORTS":
      type = <SportsTag />;
      image = "sport_720.jpg";
      break;
    case "OTHER":
      type = <OtherTag />;
      image = "other_720.png";
      break;
  }

  return (
    <>
      <div className="homePost">
        <h2>{eventName}</h2>
        <div>{type}</div>
        <img src={`/public/images/${image}`} />
        <p>{eventDescription}</p>
        <p>{`Event is on ${eventDate} @ ${eventTime}`}</p>
        <p>{`Location: ${eventLocation}`}</p>
      </div>
    </>
  );
}
