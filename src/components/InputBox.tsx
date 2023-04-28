import React, { useState } from "react";
import FloatingWindow from "./FloatingWindow";
import EmojieArea from "./EmojieArea";
type Props = {};
//聊天消息输入框
export default function InputBox({}: Props) {
  const [text, setText] = useState<string>("");
  function pushEmoji(emoji: string) {
    setText(text + emoji);
  }
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="w-full h-full px-2 border-t-2">
        <textarea
          value={text}
          onChange={handleChange}
          className="w-full h-auto input border-2"
        />
        <div className="w-full h-12 flex justify-between">
          <button className="w-24 h-8 hover:bg-red-100 rounded border-2 border-red-200">
            清空
          </button>
          <div className="flex w-24">
            <FloatingWindow content={<EmojieArea pushEmoji={pushEmoji} />}>
              <div className="w-8 h-8 ">
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6473"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M512 832c-176.448 0-320-143.552-320-320S335.552 192 512 192s320 143.552 320 320-143.552 320-320 320m0-704C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128"
                    fill="#3E3A39"
                    p-id="6474"
                  ></path>
                  <path
                    d="M700.64 580.288a32 32 0 0 0-43.712 11.68A160.608 160.608 0 0 1 518.304 672a160.576 160.576 0 0 1-138.592-80 32 32 0 0 0-55.424 32.032 224.896 224.896 0 0 0 194.016 112 224.768 224.768 0 0 0 194.016-112 32 32 0 0 0-11.68-43.744M384 512a32 32 0 0 0 32-32v-96a32 32 0 0 0-64 0v96a32 32 0 0 0 32 32M640 512a32 32 0 0 0 32-32v-96a32 32 0 0 0-64 0v96a32 32 0 0 0 32 32"
                    fill="#3E3A39"
                    p-id="6475"
                  ></path>
                </svg>
              </div>
            </FloatingWindow>
            <button className="w-24 h-8 hover:bg-blue-100 rounded border-2 border-blue-200">
              发送
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
