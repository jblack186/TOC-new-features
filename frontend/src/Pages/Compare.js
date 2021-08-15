import React, { useState, useEffect } from "react";
import "../css/Compare.scss";
import axios from "axios";
import BrandItem from "../components/BrandItem";
import Modal from "../components/Modal";
import mockData from '../brandJSON';

const Compare = () => {
  const [brandChoice, setBrandChoice] = useState('');
  const [brandId, setBrandId] = useState();

  function babyBrand(e) {
    setBrandChoice(e.target.value)
    // axios.get(`https://api.spoonacular.com/food/products/search?apiKey=648c0fa98bff450295c089d1a791f846&query=${e.target.value}`)
    .then(res => {
      console.log('respose', res)
    })
    .catch(err => {
      console.log('err',err)
    })


  }

  function getId(e) {

  }

  console.log('id', brandId)
  return (
    <div className="compare">
      <section className="compare__text">
      <h3>Tiny O products contain no added sugars or salt.</h3>
      <p>Can your go-to brands say the same? Click one of these popular brands to check.</p>
      </section>
      <section className="compare__buttons">
      <button onClick={babyBrand} value='Gerber'>Gerber</button>
      <button onClick={babyBrand} value='Beech Nut Baby Food'>Beech Nut</button>
      <button onClick={babyBrand} value='Plum'>Plum</button>
      <button onClick={babyBrand} value='Earths Best Baby Foods'>Earth's Best Baby Foods</button>

      </section>
      <section className="compare__brand-items">
       { mockData.products.map(item => {
          return <div onClick={() => {setBrandId(item.id)}} className="compare__brand-items__flex"><BrandItem title={item.title} image={item.image}/>   {brandId === item.id &&<Modal  getId={getId} id={brandId}/>}
          </div>
        })
      }
      
     </section>
    </div>
  );
};

export default Compare;