import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="center_div">
        <h3 className="white-text">Subscribe to our Newsletter</h3>
        <div className="row"><div className="col s8"><input placeholder="Email" className="newsletter_input" type="email"/></div><div className="col s4"><button className="blue white-text btn">Subscribe</button></div></div>
      </div>
    </div>
  );
};

export default Newsletter;