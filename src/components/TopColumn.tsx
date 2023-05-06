import React from "react";
import returnArrow from "../assets/returnArrow.svg";
import more from "../assets/more.svg";
import OnlineStatus from "./OnlineStatus";
import { chattingInformationType } from "../Layout/Layout";
interface Props {
  chattingInformation:chattingInformationType 
};

export default function TopColumn({chattingInformation}: Props) {
  return (
    <>
      <div className="w-full h-auto flex justify-between items-center border-b-2 border-zinc-700 px-2 ">
        <div className="w-8 h-8 cursor-pointer ">
          <img src={returnArrow} alt="返回" className="w-full h-full " />
        </div>
        <div className="w-auto h-12 ">
          <div>{chattingInformation.name}</div>
          <OnlineStatus status={chattingInformation.status} />
        </div>
        <div className="w-10 h-10  cursor-pointer">
          <img src={more} alt="更多信息" className="w-full h-full " />
        </div>
      </div>
    </>
  );
}
