
import { useEventStore } from '../app/events/stores/eventStore';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useEventStore();

  return (
    <div className="search-bar">
      <label htmlFor="search">Search Events</label>
      <input
        type="text"
        id="search"
        placeholder="Search by event name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;