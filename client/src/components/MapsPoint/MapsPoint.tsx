import React from 'react';
import Map from '../ui/Map/Map';

function MapsPoint({ coordinates }: MapComponentProps) {
  return (
    <div className='w-full mt-2'>
      <Map coordinates={coordinates} />
    </div>
  );
};

export default MapsPoint;
