import React from 'react';

const Pagination = ({ onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange('prev')}>Previous</button>
      <button onClick={() => onPageChange('next')}>Next</button>
    </div>
  );
};

export default Pagination;
