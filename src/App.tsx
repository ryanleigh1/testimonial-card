import React from "react";
import "./App.css";
import TestimonialCard from "./TestimonialCard";

function App() {
  const user = {
    name: "Sarah Dole",
    handle: "@sarahdole",
    profileImg: "/profile-thumbnail.png",
    testimonial: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <TestimonialCard {...user} />
    </div>
  );
}

export default App;
