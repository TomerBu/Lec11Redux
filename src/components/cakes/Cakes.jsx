import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../redux/cake";

const Cakes = () => {
  const dispatch = useDispatch();
  const numberOfCakes = useSelector((state) => state.cakes.numberOfCakes);

  return (
    <div>
      <h2>Number Of Cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default Cakes;
