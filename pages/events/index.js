import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

function AllEventPage() {
  const events = getAllEvents();
  const router = useRouter();

  const handleEventFiltered = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventSearch onSearch={handleEventFiltered} />
      <EventList items={events} />
    </>
  );
}

export default AllEventPage;
