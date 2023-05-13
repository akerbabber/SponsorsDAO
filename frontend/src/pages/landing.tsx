import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Sponsor a Hackathon Participant</h1>
      <p className="text-lg text-center mb-10">Help underprivileged individuals participate in hackathons by sponsoring their participation.</p>
      <button className="px-6 py-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600">Get Started</button>
    </div>
  );
};

export default LandingPage;
