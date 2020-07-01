import React, { Component } from 'react'
import payments from "../resources/payments.png"
class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="row">
          <div className="col s4"><div><div className="col s3"><i style={{fontSize: `5rem`}} class="fas blue-text fa-retweet"></i></div> <span className="col s9"><span>RETURN</span><br/><blockquote>30 days return with draw</blockquote></span></div></div>
          <div className="col s4"><div><div className="col s3"><i style={{fontSize: `5rem`}} class="fas blue-text fa-globe-asia"></i></div> <span className="col s9"><span>GLOBAL DELIVERY</span><blockquote>Ship over 100 countries</blockquote></span></div></div>
          <div className="col s4"><div><div className="col s3"><i style={{fontSize: `5rem`}} class="fas blue-text fa-money-bill"></i></div> <span className="col s9"><span>SECURE PAYMENTS</span><blockquote>Master card ,Visa ,Paypal</blockquote></span></div></div>
        </div>
        <hr/>
        <div className="companies">
          <div className="row"><h5 className="col s3">+ QUICK LINKS</h5> <p className="col s9 grey-text">More Products</p></div>
          <hr/>
          <div className="row">
            <div className="col s2">
              <h6>Audio</h6>
              <ul>
                {
                  [" Royalty Free Music", " Sound Effect", " Stock Audio", " Logic Pro File", " Background Music"].map(el=><li> <a href="" className="black-text font_small" onClick={e=> e.preventDefault()}> {el} </a> </li>)
                }
              </ul>
            </div>
            <div className="col s2">
              <h6>Code</h6>
              <ul>
                {
                  [" Word Press Plugins ", " PHP Script ", " JavaScript ", " CSS Templates ", " PrestaShop Plugins"].map(el=><li> <a href="" className="black-text font_small" onClick={e=> e.preventDefault()}> {el} </a> </li>)
                }
              </ul>
            </div>
            <div className="col s2">
              <h6>Graphics</h6>
              <ul>
                {
                  ["Logo Templates", " Business Card Templates", " Lightroom Presets", " Serif Fonts", " Sans-Serif Fonts"].map(el=><li> <a href="" className="black-text font_small" onClick={e=> e.preventDefault()}> {el} </a> </li>)
                }
              </ul>
            </div>
            <div className="col s2">
              <h6>Video Maker</h6>
              <ul>
                {
                  ["Intro Maker", " Slideshow Maker", " Instagram Story Video Maker", " Offers / Sales", " Content Teaser"].map(el=><li> <a href="" className="black-text font_small" onClick={e=> e.preventDefault()}> {el} </a> </li>)
                }
              </ul>
            </div>
            <div className="col s4" style={{
              display: `flex`,
              justifyContent: "space-around",
              alignItems: "flex-end"
            }}>Follow us: <i class="fab fa-facebook black-text"></i> <i class="fab fa-instagram grey-text"></i> <i class="fab fa-linkedin grey-text"></i> <i class="fab fa-twitter grey-text"></i></div>
          </div>
          <hr/>
          <div className="row">
            <div className="container last_section">
              <p style={{
              display: `flex`,
              justifyContent: "space-evenly"
            }}><button>About Us</button> <button>Contact Us</button> <button>Subscribe</button> <button>Privacy Policy</button></p>
              <br/>
              <p style={{fontWeight: `bold`,textAlign:`center`}}> <span>Copyright &copy;</span> All rights reserved by Ehsan</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row"><div className="col s3">Online Payment Methods:</div> <div className="col s9"><img src={payments} className="company_img" alt=""/></div></div>
      </div>
    )
  }
}

export default Footer