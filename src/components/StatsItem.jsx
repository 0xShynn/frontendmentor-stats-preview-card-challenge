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
export default StatsItem;
