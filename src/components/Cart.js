import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteCartItemActiocn } from "../redux/action/actions";
import './cart.css'

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer);
  // console.log(cartItems.cartItem)
  const dispatch = useDispatch()
  
  const renderCartItems = cartItems.cartItem.map(item=>{
    const {itemImage,itemName,itemPrize}=item
    const deletehandel = ()=>{
      dispatch(deleteCartItemActiocn(item))
    }
    return(
      <>
      <tr>
      <th scope="row"><img src={itemImage} className="img" alt='Produt_image' /></th>
      <td>{itemName}</td>
      <td>{itemPrize}</td>
      <td><button className="btn btn-danger" onClick={deletehandel}>Delete</button></td>
    </tr>
      </>
    )
  })
  return (
    <div className="container mt-4">
      <h1>Product Cart Table</h1>
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {renderCartItems}
  </tbody>
</table>
    </div>
  );
};

export default Cart;
