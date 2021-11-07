import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/action/actions";

const Item = ({ items }) => {
  const { itemName, itemImage, itemPrize } = items;
  const dispatch = useDispatch();
  const handelcart = () => {
    dispatch(cartAction(items));
  };
  return (
    <div className="my-1">
      <div
        className="card mx-1 shadow  bg-body rounded"
        style={{ width: "18rem" }}
      >
        <img src={itemImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{itemName}</h5>
          <p className="card-text">{itemPrize}</p>
          <button href="#" className="btn btn-primary" onClick={handelcart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
