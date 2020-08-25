import React from 'react';

export default function Hero({ data }) {
  const { name, image, biography } = data;
  console.log(data);
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <img src={image.url} className="card-img-top" alt={name}></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{biography['full-name']}</p>
        </div>
      </div>
    </div>
  );
}
