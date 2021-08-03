import React from 'react';

function PreviewCard() {
  return (
    <div className="overflow-hidden rounded-md bg-primary-darkblue md:flex-row-reverse md:max-w-screen-md">
      {/* Image header */}
      <div className="relative">
        <div className="absolute w-full h-full bg-primary-accent_2 bg-opacity-30" />
        <div className="w-full h-64 bg-center bg-cover bg-image-header bg-primary-accent_2 bg-blend-multiply" />
      </div>
      {/* Preview Card info */}
      <div className="px-6 py-8">
        <h1 className="mb-4 text-3xl text-center text-white font-title md:text-left">
          Get <span className="text-primary-accent_1">insights</span> that help
          your business grow.
        </h1>
        <h2 className="text-base leading-6.5 font-body text-neutral-gray_2 text-center md:text-left">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </h2>
      </div>
    </div>
  );
}

export default PreviewCard;
