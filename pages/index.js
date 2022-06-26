import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvent = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvent}></EventList>
    </div>
  );
}

export default HomePage;
