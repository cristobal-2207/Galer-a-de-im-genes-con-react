import React from 'react';
const Card = ({imageCard, titleCard, textCard, altImage}) => {
  return(
    <div>
      <img src= {imageCard} alt= {altImage} />
      <div>
        <h5>{titleCard}</h5>
        <p>{textCard}</p>
        <a href="#">Go somewhere</a>
      </div>
    </div>
  );
};


export default Card;