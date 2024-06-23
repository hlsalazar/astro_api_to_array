import React from 'react';

const SumResult = ({ sum }) => {
  return (
    <div>
      <h1>Sum Result: {sum !== null ? sum : 'No result yet'}</h1>
    </div>
  );
};

export default SumResult;
