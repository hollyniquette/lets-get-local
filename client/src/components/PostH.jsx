import AutomotiveTag from "./Tags/AutomotiveTag";

export default function PostH(props) {
  const { eventName, eventDescription, eventLocation, eventType, eventImage, eventDate, eventTime} =
    props;

  return (
    <>
      <div className="homePost">
        <h2>{eventName}</h2>
        <img src={`public/images/${eventImage}.jpg`} />
        <p>{eventDescription}</p>
        <AutomotiveTag />
        <p>{`Event is on ${eventDate} @ ${eventTime}`}</p>
        <p>{`Location: ${eventLocation}`}</p>
      </div>
    </>
  );
}
