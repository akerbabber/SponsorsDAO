import { Hackathon } from "@/interfaces/front";
import React from "react";

type Props = {
  event: Hackathon;
};

const EventDetails: React.FC<{ event: Hackathon }> = ({ event }) => {
  return (
    <div className="mb-8">
      <img
        src={event.imageUrl}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div>
        <h2 className="text-xl font-bold">{event.name}</h2>
        <p className="text-gray-500 mb-1">{event.date}</p>
        <p className="text-gray-500">{event.location}</p>
      </div>
    </div>
  );
};

const EventPage: React.FC<Props> = ({ event }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <EventDetails event={event} />
    </div>
  );
};

export async function getServerSideProps(context: {
  query: { eventId: number };
}) {
  const { eventId } = context.query;
  const res = await fetch(`http://localhost:3000/api/events/${eventId}`);
  const event = await res.json();

  return {
    props: {
      event,
    },
  };
}

export default EventPage;
