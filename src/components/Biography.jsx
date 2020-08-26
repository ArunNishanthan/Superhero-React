import React from 'react';
import Progress from './Progress';

export default function Biography({ location, history }) {
  const { hero } = location;
  console.log(hero);
  if (hero === undefined) {
    return history.push('/');
  }

  const { name, image, powerstats, biography } = hero;

  return (
    <div className="row">
      <div className="display-2 text-center mb-4">{name}</div>
      <div className="display-6 text-center mb-4">{biography['full-name']}</div>
      <div className="col-sm-6 mb-4">
        <img src={image.url} className="img-fluid" alt={name}></img>
      </div>
      <div className="col-sm-6 mb-4">
        <div className="text-center display-6 mb-4">Powerstats</div>
        {Object.entries(powerstats).map(([key, value]) => (
          <Progress key={key} title={key} value={value} />
        ))}
      </div>
    </div>
  );
}
