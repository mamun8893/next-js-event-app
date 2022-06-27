import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

function AllEventPage() {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList items={events} />
    </>
  );
}

export default AllEventPage;
