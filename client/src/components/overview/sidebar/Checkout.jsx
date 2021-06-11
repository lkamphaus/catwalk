import React, { useState } from "react";
import style from "../MainOverview.module.css";

const Checkout = ({ product, currentStyles }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [buttonText, setButtonText] = useState('Add to Cart')

  const handleSize = (e) => {
   setSelectedSize(e.target.value)
  };
  const handleAmount = (e) => {
    setSelectedAmount(e.target.value)
  };
  
  const handleButtonText = () => {
    setButtonText('**Added items to cart**')


    setTimeout(() => {
      setButtonText('Select Size')
      setSelectedAmount(''); setSelectedSize('')
    }, 3000)
  }

  return (
    <div>
      <br></br>
      <div>
        {/* <button  className={style.buttons}>Select Size</button> */}
        <select value={selectedSize} className={style.buttons} onChange={(e) => {
                  handleSize(e);
                }}>
                  <option value='' disabled selected >
                    Select Size
                  </option>
          {currentStyles &&
            currentStyles.map((item) => (
              <option
                
              >
                {item.size}
              </option>
            ))}
        </select>
        {/* <button className={style.buttoner}>1</button> */}
        <select className={style.buttoner} onChange={(e) => {
                  handleAmount(e);
                }}>
          {currentStyles &&
            currentStyles.map((item) => (
              // console.log([item.quantity])
              // sorted.push(item.quantity)
              // console.log(sorted.sort())
              <option>{item.quantity} </option>
            ))}
        </select>
      </div>
      <br></br>
      <div>
        
        {!selectedSize || !selectedAmount ? (
          <button className={style.cart}>Select Size</button>
        ) : (
          <button className={style.cart} onClick={() => {handleButtonText()}}>{buttonText}</button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
