import AutomotiveTag from "./Tags/AutomotiveTag";

export default function PostH(props) {
  const { eventName, eventDescription, eventLocation, eventType, eventImage } =
    props;

  return (
    <>
      <div className="homePost">
        {/* <h2>Bike Night</h2> */}
        <h2>{eventName}</h2>
        {/* <img src="public/images/auto_720.jpg" /> */}
        <img src={`public/images/${eventImage}.jpg`} />
        {/* <p>
          This is for all the cool bike owners who want to meet other cool bike
          owners.
        </p> */}
        <p>{eventDescription}</p>
        <AutomotiveTag />
        <p>Event is on 11/16/2023 @ 5:00pm</p>
        {/* <p>Location: 1234 main street, City, State, ZIP</p> */}
        <p>{`Location: ${eventLocation}`}</p>
      </div>
    </>
  );
}
