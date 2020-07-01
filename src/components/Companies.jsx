import React from 'react';
import img1 from "../resources/img.png";
import img2 from "../resources/img2.png";
import img3 from "../resources/img3.png";
import img4 from "../resources/img4.png";
import img5 from "../resources/img5.png";
import img6 from "../resources/img6.png";
import car from "../resources/mycar.png";
import icon1 from "../resources/icon1.png"
import icon2 from "../resources/icon2.png"
import icon3 from "../resources/icon3.png"
import icon4 from "../resources/icon4.png"
import icon5 from "../resources/icon5.png"
import icon6 from "../resources/icon6.png"
const Companies = () => {
  const data = [1,2,3,4,5,6,7,8];
  const showCards = ()=>{
    return data.map(el=> (
      <div className="col s3">
        <div className="my_card">
          <div className="front">
          <img src={car} className="company_img" alt=""/>
          <blockquote className="font_small">Shangri La bosphorus Istan...</blockquote>
          <h5 className="center blue-text">Nissan</h5>
          <div className="row">
            <div className="col s4 font_small"><div className="col s5"><img src={icon1} className="icon_png" alt=""/></div><div className="col s7">2000</div></div>
            <div className="col s4 font_small"><div className="col s5"><img src={icon2} className="icon_png" alt=""/></div><div className="col s7">DISEL</div></div>
            <div className="col s4 font_small"><div className="col s5"><img style={{transform: `translateX(-10px)`}} src={icon3} className="icon_png" alt=""/></div><div className="col s7">Corola</div></div>
            <div className="col s4 font_small"><div className="col s5"><img src={icon4} className="icon_png" alt=""/></div><div className="col s7">5,000</div></div>
            <div className="col s4 font_small"><div className="col s5"><img src={icon5} className="icon_png" alt=""/></div><div className="col s7">49,500</div></div>
            <div className="col s4 font_small" style={{transform: `translateX(-10px)`}}><div className="col s4"><img src={icon6} className="icon_png" alt=""/></div><div className="col s8">ISTANBUL</div></div>
          </div>
          </div>
          <div className="back">
            <i class="fas fa-download blue-text"></i>
            <i class="fas fa-share-alt blue-text"></i>
            <i class="fas fa-reply blue-text"></i>
          </div>
        </div>
      </div>
    ))
  }
  return (
    <div>
      <div className="companies">
        <div className="row">
          <div className="col s2"><img className="company_img" src={img1} alt=""/></div>
          <div className="col s2"><img className="company_img" src={img2} alt=""/></div>
          <div className="col s2"><img className="company_img" src={img3} alt=""/></div>
          <div className="col s2"><img className="company_img" src={img4} alt=""/></div>
          <div className="col s2"><img className="company_img" src={img5} alt=""/></div>
          <div className="col s2"><img className="company_img" src={img6} alt=""/></div>
        </div>
        <hr/>
      <div className="container categories">
        <button>2 EL ARACLAR</button>
        <button>SIFIR ARACLAR</button>
        <button>ACIL SATILIK</button>
        <button>FIYATI DUSENLER</button>
        <button>FIYATI YUKSELENLER</button>
      </div>
      <div className="buttons">
        <button className="btn blue white-text">Filitre</button>
        <button className="btn blue white-text right">VITRIN ILANLARI</button>
      </div>
      <div className="cards">
        <div className="row">
          {showCards()}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Companies;