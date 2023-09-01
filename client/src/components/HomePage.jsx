import Navbar from "./Navbar";
import PostH from "./PostH";
import FilterDropdown from "./FilterDropdown";
import { useQuery } from "@apollo/client";
import { EVENTS } from "../../queries";

export default function HomePage() {
  const { loading, error, data } = useQuery(EVENTS);
  if (error) return <Error />;
  if (loading) return <Fetching />;

  const event = data?.events || {};

  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <FilterDropdown />
      <div className="homePostBox">
        <PostH
          eventName={data.name}
          eventDescription={data.description}
          eventLocation={data.location}
          eventType={data.eventType}
          eventImage={data.eventImage}
        />
      </div>
    </>
  );
}
