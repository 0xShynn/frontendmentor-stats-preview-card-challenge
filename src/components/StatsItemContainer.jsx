import React from 'react';

const StatsItemContainer = ({ children }) => {
  return (
    <div className="flex flex-col mt-6 md:mt-20 md:flex-row">{children}</div>
  );
};

export default StatsItemContainer;
