import React, { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/events`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="events-preview">
      <h2>Upcoming Events in Ghana</h2>
      <div className="event-grid">
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map(event => (
            <div key={event.id} className="event-card">
              <h3>{event.name.text}</h3>
              <p>{new Date(event.start.local).toLocaleString()}</p>
              <p>{event.venue?.address?.localized_address_display}</p>
              <a href={event.url} target="_blank" rel="noopener noreferrer">
                View Details
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Events;