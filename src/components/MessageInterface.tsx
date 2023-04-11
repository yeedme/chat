import React from "react";

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
    
    <div className="w-full h-20 bg-white flex justify-between items-center px-2 text-sm rounded cursor-pointer">
            <div className="flex w-12 ">
              <div className="w-16 h-16 bg-blue-300 rounded shrink-0"></div>
              <div className="flex flex-col h-16 justify-between ml-2">
                <div className="shrink-0">yeedme</div>
                <div className=" whitespace-nowrap text-gray-500">
                  1123asdasd
                </div>
              </div>
            </div>
            <div className="w-atuo max-w-20 h-16 ml-2">
              <h2>10:30</h2>
            </div>
          </div>
          <div className="w-full h-20 bg-white flex justify-between items-center px-2 text-sm rounded cursor-pointer">
            <div className="flex w-12 ">
              <div className="w-16 h-16 bg-blue-300 rounded shrink-0"></div>
              <div className="flex flex-col h-16 justify-between ml-2">
                <div className="shrink-0">yeedme</div>
                <div className=" whitespace-nowrap text-gray-500">
                  1123asdasd
                </div>
              </div>
            </div>
            <div className="w-atuo max-w-20 h-16 ml-2">
              <h2>10:30</h2>
            </div>
          </div>
    </>
  );
}
