import React from 'react';

const StatsItem = ({ subtitle, count }) => {
  return (
    <div className="mb-6 text-center text-white md:mr-16 md:mb-0">
      <p className="mb-1 text-3xl font-bold md:text-2xl md:text-left">
        {count}
      </p>
      <h3 className="text-sm tracking-wider uppercase font-title text-neutral-gray_2 md:text-sm">
        {subtitle}
      </h3>
    </div>
  );
};

function PreviewCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-primary-darkblue md:flex-row-reverse md:w-1110">
      {/* Image header */}
      <div className="relative w-full">
        <div className="absolute w-full h-full bg-primary-accent bg-opacity-20" />
        <div className="h-64 bg-center bg-cover md:h-full bg-img-header-mobile bg-primary-accent bg-blend-multiply md:bg-img-header-desktop" />
      </div>

      {/* Preview Card info */}
      <div className="px-6 py-8 md:p-20">
        <h1 className="mb-4 text-3xl font-bold leading-10 text-center text-white md:text-left md:text-4.5xl md:mb-6">
          Get <span className="text-primary-accent">insights</span> that help
          your business grow.
        </h1>

        <h2 className="text-base leading-6.5 font-body text-neutral-gray_2 text-center md:text-left md:max-w-sm">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </h2>
        {/* Preview Card stats */}
        <div className="flex flex-col mt-6 md:mt-20 md:flex-row">
          <StatsItem subtitle="Companies" count="10k+" />
          <StatsItem subtitle="Templates" count="314" />
          <StatsItem subtitle="Queries" count="12M+" />
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
