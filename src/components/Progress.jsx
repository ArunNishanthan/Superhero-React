import React from 'react';

const Progress = ({ title, value, bg }) => {
  let word = title.substring(0, 1).toUpperCase() + title.substring(1);
  return (
    <React.Fragment>
      <h4>{word}</h4>
      <div className="progress mb-2">
        <div
          className={'progress-bar ' + bg}
          role="progressbar"
          style={{ width: value + '%' }}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {value === 'null' ? 0 : value}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Progress;
