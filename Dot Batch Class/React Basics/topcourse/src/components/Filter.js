import React from 'react';

const Filter = ({ filterData = [] }) => {
  return (
    <div>
      {filterData.map((data, id) => (
        <button key={id}>
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
