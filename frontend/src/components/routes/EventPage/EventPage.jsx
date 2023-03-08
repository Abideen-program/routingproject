import { Link } from "react-router-dom";
const EventPage = () => {
  const EVENTS = [
    { id: "e1", title: "Go to market" },
    { id: "e2", title: "Go to School" },
    { id: "e3", title: "Go to House" },
    { id: "e4", title: "Go to Mosque" },
  ];
  return (
    <>
      <h1>Event page</h1>
      <ul>
        {EVENTS.map((event) => {
          return (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EventPage;
