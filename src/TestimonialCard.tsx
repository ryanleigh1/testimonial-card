import React from "react";

type Props = {
  name: string;
  handle: string;
  profileImg: string;
  testimonial: string;
}

const TestimonialCard = ({ name, handle, profileImg, testimonial }: Props) => {
  return (
    <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
      <div className="flex items-center">
        <img src={profileImg} alt="Profile" className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-500">{handle}</p>
        </div>
      </div>
      <p className="mt-4 text-base text-gray-600">{testimonial}</p>
    </div>
  );
}

export default TestimonialCard;