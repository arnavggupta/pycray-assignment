
'use client';

import EventForm from  '../../components/EventForm';
import EventList from '../../components/EventLists';
import SearchBar from '../../components/SearchBar';

export default function EventsPage() {
  return (
    <div className="events-page">
      <div className="container">
        <header className="page-header">
          <h1>Event Manager</h1>
          <p>Organize and manage your events effortlessly ! </p>
        </header>

        <main className="main-content">
          <EventForm />
          <SearchBar />
          <EventList />
        </main>
      </div>
    </div>
  );
}