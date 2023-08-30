import Navbar from "./Navbar"

export default function NewEvent() {

    return(
        <>
            <Navbar/>
            <h1>Create New Event</h1>
                
            <div className="newEventBox">
                <form action="">
                    <label htmlFor="EventName">Event Name: </label>
                    <input type="text" id="EventName" name="EventName"/>
                    <br />
                    <label htmlFor="EventDescription">Event Description: </label>
                    <input type="text" id="EventDescription" name="EventDescription"/>
                    <br />
                    <label htmlFor="EventDate">Date of Event: </label>
                    <input type="text" id="EventDate" name="EventDate"/>
                    <br />
                    <label htmlFor="EventTime">Time of Event: </label>
                    <input type="text" id="EventTime" name="EventTime"/>
                    <br />
                    <label htmlFor="EventLocation">Event Location: </label>
                    <input type="text" id="EventLocation" name="EventLocation"/>
                    <br />
                    <h4>Event Type</h4>
                    <input type="radio" id="Automotive" name="EventType"/>
                    <label htmlFor="Automotive">Automotive</label>
                    <br />
                    <input type="radio" id="Educational" name="EventType"/>
                    <label htmlFor="Educational">Educational</label>
                    <br />
                    <input type="radio" id="Entertainment" name="EventType"/>
                    <label htmlFor="Entertainment">Entertainment</label>
                    <br />
                    <input type="radio" id="Pets" name="EventType"/>
                    <label htmlFor="Pets">Pets</label>
                    <br />
                    <input type="radio" id="Sports" name="EventType"/>
                    <label htmlFor="Sports">Sports</label>
                    <br />
                    <input type="radio" id="Other" name="EventType"/>
                    <label htmlFor="Other">Other</label>
                    <br />
                    <input type="submit" value="Create Event" />
                </form>
            </div>
        </>
    )

}