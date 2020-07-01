import React, { Component } from 'react'
import logo from "../resources/logo.png"
class Header extends Component {
  render () {
    return (
      <div className="my_header">
        <div className="row">
          <div className="col s8">
            <div className="logo col s2"><img src={logo} width="100" alt="logo"/></div>
            <div className="search col s10">
              <input type="text" className=""/>
              <i class="fas fa-search search_icon"></i>
            </div>
          </div>
          <div className="col s4">
            <div className="my_icons col s5">
              <i class="fas fa-shopping-cart"></i>
              <i class="far fa-bookmark"></i>
              <i class="far fa-heart"></i>
              <i class="fas fa-comments"></i>
            </div>
            <div className="col s4">
              <button className="btn blue white-text" style={{width: `100%`,padding: `0`}}>Bize Katilin</button>
            </div>
            <div className="col s2">
              <button className="transparent btn black-text right menu_icon">
                <i class="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="menu_buttons">
          <button>2 EL ARACLAR</button>
          <button>OTO KIRALAMA</button>
          <button>OTO MARKETIM</button>
          <button>OTO EXPERTIZ</button>
          <button>OTO KUAFOR</button>
          <button>OTO TAMIRCIM</button>
          <button>OTO PIYASA</button>
          <button>BILET AL</button>
          <button>YOL YARDIM</button>
        </div>
      </div>
    )
  }
}

export default Header