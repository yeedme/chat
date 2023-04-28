import React from "react";
import jabala from "../assets/jabala.svg";
type Props = {};
//消息预览
const testDtat = [
  {
    name: "小飞侠",
    text: "你好，我很好超级好",
    date: "10:30",
  },
  {
    name: "小飞侠",
    text: "酷哈 ",
    date: "10:30",
  },

  {
    name: "小飞侠",
    text: "酷哈酷哈酷哈酷哈酷哈酷哈酷哈酷哈酷哈酷哈 ",
    date: "10:30",
  },
  {
    name: "小飞侠",
    text: "酷哈 ",
    date: "10:30",
  },
]; 

export default function MessageInterface({}: Props) {
  return (
    <>
      {testDtat.map((t, index) => {
        return (
          <div
            key={index}
            className="w-full h-20  flex justify-between items-center px-2 text-sm rounded-xl cursor-pointer  hover:bg-slate-50 bg-white  mb-2 hover:shadow-md  "
          >
            <div className="flex w-1/2 ">
              <img src={jabala} className="w-16 h-16 rounded shrink-0"></img>
              <div className="flex flex-col h-16 w-full justify-around ml-2">
                <div className="shrink-0 w-auto">{t.name}</div>
                <div className="w-full whitespace-nowrap overflow-hidden text-gray-500 text-overflow-ellipsis">
                  {t.text}
                </div>
              </div>
            </div>
            <div className="w-atuo max-w-20 h-16 ml-2 mt-2">
              <h2>{t.date}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}
