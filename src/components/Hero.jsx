import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ data }) {
  const { name, image } = data;
  console.log(data);
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <img src={image.url} className="card-img-top" alt={name}></img>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <Link
            to={{
              pathname: '/hero',
              hero: data,
            }}
            className="btn btn-primary"
          >
            Open
          </Link>
        </div>
      </div>
    </div>
  );
}
