import './App.css'
import { useState } from 'react'

export default function App() {
  const [toggleShare, settoggleShare] = useState(false)

  function toggle() {
    settoggleShare(prev => !prev)
  }

  return (
    <div className="app">
      <img className='main-img' src="/images/drawers.jpg" alt="drawers" />
      <div>
        <div className="text-container">
          <h3>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h3>
          <p>
            Ever been in a room and felt like something was missing?
            Perhapse it felt slightly bare and uninviting. I've got some simple tips to help you make any
              room feel complete.
          </p>
        </div>
          <div className="author-section">
            {toggleShare ? 
            <div className="social-media-links">
              <div className="left-side-social-media">
              <div className="links-container">
                <span className="share-text">
                  SHARE
                </span>
                <img src="/images/icon-facebook.svg" alt="facebook" />
                <img src="/images/icon-twitter.svg" alt="twitter" />
                <img src="/images/icon-pinterest.svg" alt="pinterest" />
              </div>
              </div>
              <div className="share-icon-container active" onClick={toggle}>
                <img className='share-icon active' src="/images/icon-share.svg" alt="share" />
              </div>
            </div>
            :
            <div className="author-details">
              <div className='author-left'>
                <img className='author-img' src="/images/avatar-michelle.jpg" alt="michelle" />
                <div className='author-name-date'>
                  <h4>
                    Michelle Appleton
                  </h4>
                  <span className="author-date">
                    28 Jun 2020
                  </span>
                </div>
              </div>
              <div className="share-icon-container" onClick={toggle}>
                <img className='share-icon' src="/images/icon-share.svg" alt="share" />
              </div>
            </div>}
          </div>
      </div>
    </div>
  )
}