import React from 'react';

const Footer = (props) =>{
  return(
    <div className = "container-footer">
      <p className = "footer">{props.textFooter}</p>
    </div>
    
  )
};

export default Footer;