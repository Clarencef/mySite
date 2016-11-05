import React from 'react';

const Overlay = ({ overlayImg }) => {
  return (
    <div className="checkout_overlay" style={{backgroundImage: 'url(' + overlayImg + ')'}}>
    </div>
  );
};

export default Overlay;
