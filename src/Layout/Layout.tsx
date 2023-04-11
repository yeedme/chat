import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Conversation from "../components/Conversation";
import Chat from "../components/Chat";
type Props = {};

export default function Layout({}: Props) {
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // 返回清理函数以移除事件监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <div className="flex w-screen h-screen ">
        <Nav/>
        <Conversation/>
        <Chat/>
      </div>
    </>
  );
}
