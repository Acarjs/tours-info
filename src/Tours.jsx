import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  return (
    <section>
      <div className='title'>
        <h2>Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {props.tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={props.removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

// -------------------2.way ---------------------

// const Tours = (props) => {
//   const { tours, removeTour } = props;
//   return (
//     <section>
//       <div className='title'>
//         <h2>Our Tours</h2>
//         <div className='title-underline'></div>
//       </div>
//       <div className='tours'>
//         {tours.map((tour) => {
//           return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default Tours;

// -------------------3.way ---------------------

// const Tours = ({ tours, removeTour }) => {
//   return (
//     <section>
//       <div className='title'>
//         <h2>Our Tours</h2>
//         <div className='title-underline'></div>
//       </div>
//       <div className='tours'>
//         {tours.map((tour) => {
//           return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default Tours;
