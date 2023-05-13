import React from "react";
import Link from "next/link";

type Event = {
  id: number;
  name: string;
  date: string;
  location: string;
  imageUrl: string;
};

const events: Event[] = [
  {
    id: 1,
    name: "ETH Global: Lisbon",
    date: "June 12-14, 2023",
    location: "San Francisco, CA",
    imageUrl: "/images/events/event-1.webp",
  },
  {
    id: 2,
    name: "ETH New York",
    date: "July 9-11, 2023",
    location: "New York, NY",
    imageUrl: "/images/events/event-2.webp",
  },
  // Add more events here
];

const EventsPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Hackathon Events</h1>
      {events.map((event) => (
        <div key={event.id} className="mb-8">
          <Link href={`/events/${event.id}`} passHref>
            <img
              src={event.imageUrl}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div>
              <h2 className="text-xl font-bold cursor-pointer">{event.name}</h2>
              <p className="text-gray-500 mb-1">{event.date}</p>
              <p className="text-gray-500">{event.location}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
