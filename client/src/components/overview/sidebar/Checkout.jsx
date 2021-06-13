import React, { useState } from "react";
import style from "../MainOverview.module.css";

const Checkout = ({ product, currentStyles }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedAmount, setSelectedAmount] = useState([]);
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [amount, setAmount] = useState("");
  const [defaultAmount, setDefaultAmount] = useState('-')
  const [value, setValue] = useState('false')
  
  const handleSize = (e) => {
    setSelectedSize(e.target.value);
    let count = 1;
    let array = [];
    if (currentStyles) {
      currentStyles.map((item) => {
        if (item.size === e.target.value) {
          while (count <= item.quantity) {
            if (count <= 15) {
              array.push(count);
            }
            count++;
          }
        }
      });
      setAmount('-')
    }
    setValue(true)
    setSelectedAmount(array);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
    setValue(false)
    
  };

  const handleButtonText = () => {
    setButtonText("**Added items to cart**");
    setTimeout(() => {
      setValue('false')
      setAmount("");
      setSelectedSize("");
      setButtonText("Add to Cart");
      setDefaultAmount('-')
    }, 3000);
  };

  return (
    <div>
      <br></br>
      <div>
        <select
          value={selectedSize}
          className={style.buttons}
          onChange={(e) => {
            handleSize(e);
          }}
        >
          <option value="" disabled selected>
            Select Size
          </option>
          {currentStyles &&
            currentStyles.map((item, i) => <option key={i}>{item.size ? item.size : 'OUT OF STOCK'}</option>)}
        </select>

        <select 
          className={style.buttoner}
          onChange={(e) => {
            handleAmount(e);
          }}
        > <option value="" disabled selected>
        {defaultAmount}
      </option>
          {currentStyles &&
            selectedAmount.map((current, i) => <option key={i}> {amount ? current : amount} </option>)}
        </select>
      </div>
      <br></br>
      <div>
        {!selectedSize || value ? (
          <button className={style.cart} onClick={() => alert('please select a size')}>Select Size</button>
        ) : (
          <button
            className={style.cart}
            onClick={() => {
              handleButtonText();
            }}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
