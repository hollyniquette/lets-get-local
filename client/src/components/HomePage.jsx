import Navbar from "./Navbar";
import PostH from "./PostH";
import FilterDropdown from "./FilterDropdown";
import { useQuery } from "@apollo/client";
import { EVENTS } from "../../queries";

export default function HomePage() {
  const { loading, error, data } = useQuery(EVENTS);

  //   if (error) return <Error />;
  //   if (loading) return <Fetching />;

  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <FilterDropdown />
      <div className="homePostBox">
        {data?.events?.map((event, index) => {
          return (
            <PostH
              eventName={event.name}
              eventDescription={event.description}
              eventLocation={event.location}
              eventType={event.type}
              eventImage={event.image}
            />
          );
        })}
      </div>
    </>
  );
}
