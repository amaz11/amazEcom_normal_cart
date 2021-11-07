import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Control, Form, Errors, actions } from "react-redux-form";
import { Link } from "react-router-dom";
import { postItemAction } from "../redux/action/actions";

const required = (val) => val && val.length;

const AddItem = () => {
  const itempost = useSelector(state=>state.products)
  console.log(itempost)
  const dispatch = useDispatch()
  const handleSubmit = () => {
    // console.log(value);
    dispatch(actions.reset('products'))
    dispatch(postItemAction(itempost))

  };

  return (
    <div className="container mt-4">
      <Form model="products" onSubmit={value=>handleSubmit(value)}>
        <Control
          model="products.itemName"
          type="text"
          placeholder="Product Name"
          className="form-control mt-2"
          validators={{ required }}
        />
        <Errors
          model="products.itemName"
          className="text-danger"
          show="touched"
          messages={{ required: "Please Enter Product Name" }}
        />
        <Control
          model="products.itemPrize"
          type="text"
          placeholder="Product Prize"
          className="form-control mt-2"
          validators={{ required }}
        />
        <Errors
          model="products.itemPrize"
          className="text-danger"
          show="touched"
          messages={{ required: "Please Enter Product Prize" }}
        />
        <Control
          model="products.itemImage"
          type="text"
          placeholder="Product Url"
          className="form-control mt-2"
          validators={{ required }}
        />
        <Errors
          model="products.itemImage"
          className="text-danger"
          show="touched"
          messages={{ required: "Please Enter Product Url" }}
        />
        <button type="submit" className="btn btn-primary mx-4 mt-4">
          Add Book
        </button>
        <Link to="/" className="btn btn-danger mt-4">
          Go Back
        </Link>
      </Form>
    </div>
  );
};

export default AddItem;
