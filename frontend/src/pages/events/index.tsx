import React from "react";
import Link from "next/link";
import { Hackathon } from "@/interfaces/front";
import { GetStaticProps } from "next/types";

type Props = {
  events: Hackathon[];
};

const EventsPage: React.FC<Props> = ({ events }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Hackathons</h1>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("http://localhost:3000/api/events");
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
};

export default EventsPage;
