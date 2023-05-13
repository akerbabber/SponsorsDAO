import React from "react";
import { useRouter } from "next/router";

const EventPage: React.FC = () => {
  const router = useRouter();
  const { eventId } = router.query;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Hackathon Event</h1>
      <p className="mb-4">
        <strong>Date:</strong> August 28, 2023
      </p>
      <p className="mb-4">
        <strong>Time:</strong> 9:00 AM - 6:00 PM
      </p>
      <p className="mb-4">
        <strong>Location:</strong> Virtual
      </p>
      <p className="mb-4">
        Join us for our annual hackathon event! This year, we're focusing on
        creating solutions to help underprivileged communities. We welcome
        developers of all skill levels to participate. There will be prizes for
        the best projects and opportunities to network with other participants
        and sponsors.
      </p>
      <h2 className="text-2xl font-bold mb-4">Schedule</h2>
      <ul className="space-y-4">
        <li>
          <p className="font-medium">9:00 AM - 9:30 AM: Opening Ceremony</p>
          <p>Welcome from the organizers and keynote speaker.</p>
        </li>
        <li>
          <p className="font-medium">9:30 AM - 12:00 PM: Hacking Session 1</p>
          <p>Work on your projects and get help from mentors.</p>
        </li>
        <li>
          <p className="font-medium">12:00 PM - 1:00 PM: Lunch Break</p>
          <p>Take a break and recharge.</p>
        </li>
        <li>
          <p className="font-medium">1:00 PM - 3:30 PM: Hacking Session 2</p>
          <p>Continue working on your projects.</p>
        </li>
        <li>
          <p className="font-medium">3:30 PM - 4:00 PM: Break</p>
          <p>Take a short break before the final session.</p>
        </li>
        <li>
          <p className="font-medium">4:00 PM - 5:30 PM: Final Pitch Session</p>
          <p>Present your projects to the judges.</p>
        </li>
        <li>
          <p className="font-medium">5:30 PM - 6:00 PM: Closing Ceremony</p>
          <p>Award ceremony and final remarks from the organizers.</p>
        </li>
      </ul>
    </div>
  );
};

export default EventPage;
