"use client";
import React, { Children, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function FAQ({children}) {
    const [faqShowIndex, setFaqShowIndex]=useState(null) // 0 pass to null value when open 1st value
  return (
    <>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement (child, {faqShowIndex, setFaqShowIndex, index})
      })}
    
    </>
  );
}



export const FaqItem = ({faqShowIndex, setFaqShowIndex, index, title, children}) => {

    const faqClick = (index) => {
        setFaqShowIndex(faqShowIndex === index ? null : index)
    }

    const faqOpen = faqShowIndex === index

  return (
    <div className="mt-[10px]">
      <div onClick={() => faqClick(index)}
      className="flex items-center justify-between px-[8px] relative">
        <h1>{title}</h1>
        {faqOpen ? <FaMinus /> : <FaPlus />}
        
      </div>
      <div
        className={`w-[100%] overflow-hidden transition-all duration-500 bg-red-400  ${
            faqOpen ? " h-[150px]" : "h-0"
        }`}
      >{children}
      </div>
    </div>
  );
};
