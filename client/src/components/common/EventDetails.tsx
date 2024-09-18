import { useParams } from "react-router-dom";
interface EventProps {
  
    time:Date;
    title: string;
    image: string;
    description: string;
    details?:string;
  }
// Event details component
function EventDetails({ events }: { events: EventProps[] }) {
  const { id } = useParams<{ id: string }>(); // Get dynamic route parameter


  const eventId = id ?? "0"; // Provide a fallback value if `id` is undefined

  const event = events[parseInt(eventId, 10)];

  if (!event) {
    return <p>Error: Event not found.</p>;
  }
  return (
    <div>
      <h1>{event.title}</h1>
      <img src={event.image} alt={event.title} />
      <p>{event.description}</p>
      <p>
        {event.time.toLocaleDateString("sv-SE")}{" "}
        {event.time.toLocaleTimeString("sv-SE", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
}

export default EventDetails;
