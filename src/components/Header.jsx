import React from 'react';

const Header = (props) => {
  return(
    <div className = "header">
      <h1 className = "title-header">{props.titleHeader}</h1>;
    </div>
    
  ) 
};

export default Header;