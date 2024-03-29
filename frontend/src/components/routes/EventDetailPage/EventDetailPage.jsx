import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from '../../EventItem'
const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ params }) => {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for the selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};
