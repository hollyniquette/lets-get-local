import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import PostH from "./PostH";
import FilterDropdown from "./FilterDropdown";
import { useQuery } from "@apollo/client";
import { EVENTS } from "../../queries";

export default function HomePage() {
  const { loading, error, data } = useQuery(EVENTS);
  const [filterValue, updateFilterValue] = useState("ALL");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  //   if (error) return <Error />;
  //   if (loading) return <Fetching />;

  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <FilterDropdown updateFilterValue={updateFilterValue} />
      <div className="homePostBox">
        {data?.events
          ?.filter((event) => {
            if (filterValue == "ALL") {
              return true;
            }
            return event.type == filterValue;
          })
          .map((event, index) => {
            return (
              <PostH
                key={`home-post-${index}`}
                eventName={event.name}
                eventDescription={event.description}
                eventLocation={event.location}
                eventType={event.type}
                eventImage={event.image}
                eventDate={event.date}
                eventTime={event.beginTime}
              />
            );
          })}
      </div>
    </>
  );
}
