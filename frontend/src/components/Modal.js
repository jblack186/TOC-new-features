import React, {useState, useEffect} from "react";
import '../css/Modal.scss';
import axios from "axios";
import mockData from "../brandJSON";

function Modal(props) {
  const [sodium, setSodium] = useState()
  const [sugar, setSugar] = useState()
  const [brandItem, setBrandItem] = useState()
console.log(props)

  useEffect(() => {
    axios.get('')
    let data = mockData.ingredients.find(item => {
      return (item.id = props.getId)
    })
    setBrandItem(data);

  }, [props])


  return (
    <div className="modal-container">
      <div className="modal">
      <p>Sodium: </p>
      <p>Sugar: </p>
      </div>
    </div>
  )
}

export default Modal;