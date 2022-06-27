import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return <h2>Event Details Page</h2>;
}

export default EventDetailsPage;
