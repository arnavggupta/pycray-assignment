
import { useEventStore }  from '../app/events/stores/eventStore';

const EventList = () => {
  const { deleteEvent, getFilteredEvents } = useEventStore();
  const events = getFilteredEvents();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (events.length === 0) {
    return (
      <div className="event-list">
        <h3>Your Events</h3>
        <p className="no-events">No events found. Add your first event above!</p>
      </div>
    );
  }

  return (
    <div className="event-list">
      <h3>Your Events ({events.length})</h3>
      <div className="events-container">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <div className="event-info">
              <h4 className="event-name">{event.name}</h4>
              <p className="event-date">{formatDate(event.date)}</p>
            </div>
            <button
              onClick={() => deleteEvent(event.id)}
              className="delete-btn"
              aria-label={`Delete ${event.name}`}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;