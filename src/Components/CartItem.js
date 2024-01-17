import React from "react";
import {MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {

  const dispatch=useDispatch()
  const removeItem=()=>{
    dispatch(remove(item.id))
    toast.success("Item remove")
  }
  return (
    <div className="flex flex-col max-w-md mt-12 mx-24 border-b border-y-cyan-950 ">
      <div className="">
        <div className="">
          <img src={item.image} alt="" className="h-60"  />
        </div>
        <div className="">
          <h1 className="text-gray-900 font-semibold" >{item.title}</h1>
          <h1 className="mt-2">{item.description.split(" ").splice(0, 10).join(" ") + "..."}</h1>
          <div className="flex justify-between mt-2 mb-2">
            <p className="text-green-600">{item.price}</p>
            <div className="bg-red-400 rounded-full text-xl" onClick={removeItem}>
              <MdDelete/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
