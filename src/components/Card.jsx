import React from 'react';
const Card = ({imageCard, titleCard, textCard, altImage}) => {
  return(
    <div className = "container-card">
      <div className = "card">
        <img className = "img-card" src = {imageCard} alt= {altImage} />
        <div className = "card-info">
          <h3>{titleCard}</h3>
          <p>{textCard}</p>
        </div>
      </div>
    </div>
    
  );
};
export default Card;