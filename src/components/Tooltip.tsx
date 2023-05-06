import React, { useState } from "react";
interface Props {
  content: any;
  children: any;
  tooltipShow: boolean;
}
const Tooltip = ({ content, children, tooltipShow }: Props) => {
  return (
    <div className="relative">
      <div>{children}</div>
      {tooltipShow && (
        <div className="flex flex-col justify-center items-center w-24 absolute bottom-full mb-4 ">
          <div className="h-auto  p-2  w-18 bg-zinc-700 text-center">
            {content}
          </div>
          <div className="triangle" />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
