import React, { useState } from 'react';

const Tour = (props) => {
  const { id, image, info, name, price, removeTour } = props;
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  const sum = `${info.substring(0, 200)}`;

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : sum}
          <button type='button' className='info-btn' onClick={readMoreHandler}>
            {readMore ? ` Show less` : '...Read More'}
          </button>
        </p>
        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
