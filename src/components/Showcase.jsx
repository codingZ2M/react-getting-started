import React from 'react';
import { Link } from 'react-router-dom';

function Showcase(props) {
 
  return (
    <div className="container mx-auto  px-4 md:px-6 lg:px-8 my-12 sm:my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          props.bikes.map(bike => (
          <div key={bike.id}
               className="rounded-lg shadow-md overflow-hidden 
                            hover:shadow-lg transition-shadow duration-300"
          >
           <Link to={`/bike/${bike.id}`}>
            <img src={bike.image} alt={bike.name} className="h-72 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{bike.name}</h3>
              <p className="text-gray-700 text-justify pt-2">{bike.price}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showcase;
