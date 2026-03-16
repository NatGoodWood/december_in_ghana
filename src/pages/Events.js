import React, { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://www.eventbriteapi.com/v3/events/search/?location.address=Accra,Ghana&expand=venue", {
      headers: {
        Authorization: `Bearer FD236G5OIATLXYNY4X`
      }
    })
      .then(res => res.json())
      .then(data => setEvents(data.events || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="events-preview">
      <h2>Upcoming Events in Ghana</h2>
      <div className="event-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.name.text}</h3>
            <p>{new Date(event.start.local).toLocaleString()}</p>
            <p>{event.venue?.address?.localized_address_display}</p>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;