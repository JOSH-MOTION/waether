import React from 'react'

function TopButton() {
 const cities=[
     {
         id:1,
         title: "Ghana"
     },
     {
        id:2,
        title: "London"
    },
    {
        id:3,
        title: "Toronto"
    },
    {
        id:4,
        title: "Paris"
    },
    {
        id:5,
        title: "Togo"
    },
    {
        id:6,
        title: "Sydney"
    },

 ]






  return <div className='flex items-center justify-around my-6'>
      {cities.map((city) =>(
          <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
      ))}
  </div>
};

export default TopButton;