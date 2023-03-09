import { useLoaderData } from "react-router-dom";
import EventsList from "../../EventsList";

const EventsPage = () => {
  const events = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // setError("Fetching events failed.");
  } else {
    const data = await response.json();
    return data.events;
  }
};
