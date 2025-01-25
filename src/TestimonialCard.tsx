import React from "react";

type Props = {
  name: string;
  handle: string;
  profileImg: string;
  testimonial: string;
}

const TestimonialCard = ({ name, handle, profileImg, testimonial }: Props) => {
  return (
    <section
      className="bg-white w-96 p-8 rounded-lg shadow-lg"
      aria-labelledby={`${name.replace(/\s+/g, "-").toLowerCase()}-testimonial`}
    >
      <div className="flex items-center">
        <img
          src={profileImg} 
          alt={`${name}'s profile picture`} 
          className="w-12 h-12 rounded-full" 
        />
        <div className="ml-4">
          <h2
            id={`${name.replace(/\s+/g, "-").toLowerCase()}-testimonial`} 
            className="text-lg font-semibold"
          >
            {name}
          </h2>
          <p className="text-gray-500">{handle}</p>
        </div>
      </div>
      <p className="mt-4 text-base text-gray-600" aria-live="polite">{testimonial}</p>
    </section>
  );
}

export default TestimonialCard;