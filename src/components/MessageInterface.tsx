import React from "react";
import jabala from '../assets/jabala.svg'
type Props = {};
const testDtat = [
  {
    name: "小飞侠",
    text: "你好，我很好超级好",
    date: "10:30",
  },
  {
    name: "大飞下",
    text: "酷哈 ",
    date: "10:30",
  },
];
export default function MessageInterface({}: Props) {
  return (
    <>
      <div className="w-full h-20  flex justify-between items-center px-2 text-sm rounded-xl cursor-pointer hover:bg-white  ">
        <div className="flex w-12 ">
          <img src={jabala} className="w-16 h-16 rounded shrink-0"></img>
          <div className="flex flex-col h-16 justify-around ml-2">
            <div className="shrink-0">yeedme</div>
            <div className=" whitespace-nowrap text-gray-500">1123asdasd</div>
          </div>
        </div>
        <div className="w-atuo max-w-20 h-16 ml-2 mt-2">
          <h2>10:30</h2>
        </div>
      </div>
 
    </>
  );
}
