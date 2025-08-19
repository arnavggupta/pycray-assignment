
import { useForm } from 'react-hook-form';
import { useEventStore } from '../app/events/stores/eventStore';

interface EventFormData {
  name: string;
  date: string;
}

const EventForm = () => {
  const addEvent = useEventStore((state) => state.addEvent);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventFormData>();

  const onSubmit = (data: EventFormData) => {
    addEvent({
      name: data.name,
      date: data.date,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="event-form">
      <h2>Add New Event</h2>
      
      <div className="form-group">
        <label htmlFor="name">Event Name *</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Event name is required' })}
          className={`form-input ${errors.name ? 'error' : ''}`}
          placeholder="Enter event name"
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="date">Event Date *</label>
        <input
          type="date"
          id="date"
          {...register('date', { required: 'Event date is required' })}
          className={`form-input ${errors.date ? 'error' : ''}`}
        />
        {errors.date && (
          <span className="error-message">{errors.date.message}</span>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Add Event
      </button>
    </form>
  );
};

export default EventForm;