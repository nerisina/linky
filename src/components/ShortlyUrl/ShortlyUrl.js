import React from "react";

const ShortlyUrl = (props) => {
  return (
      <div className="pa4 ph7-l georgia mw9-l center">
        <input type='url' id='urlinput' /> 
        <button className='bg-gold' style={{'border': 'none'   }}>Copy</button>
        <button className='f6 link dim ph3 pv2 mb2 dib white'>Short The URL</button>
      </div>
  );
};

export default ShortlyUrl;
