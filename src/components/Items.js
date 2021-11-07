import React, { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const Items = () => {
  const itemstate = useSelector(state=>state.itemReducer)
  // console.log(itemstate.items)
  const [searchkey, setSearchkey] = useState("");
  const  [everyItems,setEveryItems] = useState(itemstate.items)
  const filterItem = ()=>{
    const dulicatList = itemstate.items
    const filterList = dulicatList.filter(item=> item.itemName.toLowerCase().includes(searchkey.toLowerCase()))
    setEveryItems(filterList)
}
  const renderItems = everyItems.map(items=>{
    
    return(
      <div className='col-4'>
      <Item items={items}/>
      </div>
    )
  })
  return (
    <>
    <div className='container my-4'>
    <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchkey}
                onChange={e=>setSearchkey(e.target.value)}
                onKeyUp={filterItem}
              />
    </div>
    
    <div className="d-flex container my-4">
      <div className='row'>
        {renderItems}
      </div>
    </div>
    </>
  );
};

export default Items;
