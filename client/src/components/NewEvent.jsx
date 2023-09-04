import Navbar from "./Navbar"

import { useState } from 'react';
// Important for useMutation: We import the useMutation hook from @apollo/client
import { useMutation } from '@apollo/client';

// Important for useMutation: We import the specific query we'd like to perform from the mutations.js utility
import { ADD_EVENT } from "../../mutations";

export default function NewEvent() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [beginTime, setBeginTime] = useState('');
    const [location, setLocation] = useState('');

    const [CreateEvent, { error }] = useMutation(ADD_EVENT, {
      });

      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          // Important for useMutation: Here we want the mutation to occur in response to a form submission
          // The mutation we want to run also requires mutation parameters to be passed, which we deliver as a variables object
          const { data } = await CreateEvent({
            variables: { name, date, type, description, beginTime, location},
          });
          
          // Instead of refreshing the page, the query dispatched at the src/pages/Home.jsx level is refetched, allowing the updated data to be passed down to the ThoughtList component for display. Then, we can directly clear the component state.
          setName('');
          setDate('');
          setType('');
          setDescription('');
          setBeginTime('');
          setLocation('');
        } catch (err) {
          console.error(err);
        }
      };

    return(
        <>
            <Navbar/>
            <h1>Create New Event</h1>
                
            <div className="newEventBox">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="EventName">Event Name: </label>
                    <input required type="text" id="EventName" name="EventName" value={name} onChange={(event) => setName(event.target.value)}/>
                    <br />
                    <label htmlFor="EventDescription">Event Description: </label>
                    <input required type="text" id="EventDescription" name="EventDescription" value={description} onChange={(event) => setDescription(event.target.value)}/>
                    <br />
                    <label htmlFor="EventDate">Date of Event: </label>
                    <input required type="text" id="EventDate" name="EventDate" value={date} onChange={(event) => setDate(event.target.value)}/>
                    <br />
                    <label htmlFor="EventTime">Time of Event: </label>
                    <input required type="text" id="EventTime" name="EventTime" value={beginTime} onChange={(event) => setBeginTime(event.target.value)}/>
                    <br />
                    <label htmlFor="EventLocation">Event Location: </label>
                    <input required type="text" id="EventLocation" name="EventLocation" value={location} onChange={(event) => setLocation(event.target.value)}/>
                    <br />
                    <h4>Event Type</h4>
                    <input type="radio" id="Automotive" name="EventType" value={"AUTOMOTIVE"} onClick={(event) => setType(event.target.value)}/>
                    <label htmlFor="Automotive">Automotive</label>
                    <br />
                    <input type="radio" id="Educational" name="EventType" value={"EDUCATION"} onClick={(event) => setType(event.target.value)}/>
                    <label htmlFor="Educational">Educational</label>
                    <br />
                    <input type="radio" id="Entertainment" name="EventType" value={"ENTERAINMENT"} onClick={(event) => setType(event.target.value)}/>
                    <label htmlFor="Entertainment">Entertainment</label>
                    <br />
                    <input type="radio" id="Pets" name="EventType" value={"PETS"} onClick={(event) => setType(event.target.value)}/>
                    <label htmlFor="Pets">Pets</label>
                    <br />
                    <input type="radio" id="Sports" name="EventType" value={"SPORTS"} onClick={(event) => setType(event.target.value)}/>
                    <label htmlFor="Sports">Sports</label>
                    <br />
                    <input defaultChecked type="radio" id="Other" name="EventType" value={"OTHER"} onClick={(event) => setType(event.target.value)}/>
                    <label htmlFor="Other">Other</label>
                    <br />
                    <input type="submit" value="Create Event" />
                </form>
            </div>
        </>
    )

}