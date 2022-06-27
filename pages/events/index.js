import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

function AllEventPage() {
  const events = getAllEvents();
  return <EventList items={events} />;
}

export default AllEventPage;
