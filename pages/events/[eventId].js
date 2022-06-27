import { useRouter } from "next/router";
import EventContent from "../../components/event-details/EventContent";
import EventLogistics from "../../components/event-details/EventLogistics";
import EventSummary from "../../components/event-details/EventSummary";
import { getEventById } from "../../dummy-data";
function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <h2>Event Not Found!</h2>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailsPage;
