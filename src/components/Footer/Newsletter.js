import React from 'react'

export const Newsletter = () => {
    return (
        <div className="app__newsletter">
        <div className="app__newsletter-heading">
          <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
          <p className="p__opensans text-white">And never miss latest Updates!</p>
        </div>
        <div className="app__newsletter-input flex__center">
          <input type="email" placeholder="Enter your email address" />
          <button type="button" className="custom__button">Subscribe</button>
        </div>
      </div>
    )
}
