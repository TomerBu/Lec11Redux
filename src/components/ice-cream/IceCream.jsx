import React from "react";
import { useSelector } from "react-redux";
import {iceCreamActions} from '../../redux/store'
//KISS = Keep it simple
//SRP = Single Responsibility Principle
const IceCream = () => {
  
  const numberOfIceCreams = useSelector(
    (state) => state.icecreams.numberOfIceCreames
  );

  const buyIceCreamHandler = () => {
    //dispatch(buyIceCream());
    iceCreamActions.buyIceCream()
  };
  return (
    <div>
      <h2>Number of IceCreams: {numberOfIceCreams}</h2>
      <button onClick={buyIceCreamHandler}>Buy Ice Cream</button>
    </div>
  );
};

export default IceCream;
