import React, { ReactNode, useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
//浮动窗口组件 hover 或者 点击的时候 展示浮动窗口
interface Props {
  content?: ReactNode; //浮窗展示的内容
  children: ReactNode; //需要包裹的组件
  trigger?: "hover" | "click";//可选项 有一说一这个组件封装的很烂 联动起来耦合性太高了
}

export default function FloatingWindow({
  content,
  children,
  trigger = "click", 
}: Props) {
  const [show, setShow] = useState(false);
  const emojiRef = useRef(null);
  const closeEmojiArea = () => {
    setShow(false);
  };
  //自定义的hook 感觉在这里使用有点问题 
  //用于关闭emojiArea 
  useClickOutside(emojiRef, closeEmojiArea);
  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setShow(false);
    }
  };

  const handleClick = () => {
    if (trigger === "click") {
      setShow(!show);
    }
  };

  return (
    <>
      <div className="relative ">
        {show && (
          <div className="absolute bottom-full w-auto h-auto" ref={emojiRef}>
            {content}
          </div>
        )}
        <div
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-8 h-8"
        >
          {children}
        </div>
      </div>
    </>
  );
}
