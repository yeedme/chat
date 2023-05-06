import React, { useState } from "react";
import FloatingWindow from "./FloatingWindow";
import EmojieArea from "./EmojieArea";
import { getTime } from "../utils";
import Button from "./Button";
import { nanoid } from "nanoid";
interface messageType {
  message_id: string;
  content: string;
  sentAt: string;
  sender_id: string;
  receiver_id: string;
}
interface Props {
  updataMessages: (newMessage: messageType) => void;
}
//聊天消息输入框
export default function InputBox({ updataMessages }: Props) {
  const [text, setText] = useState<string>("");

  //修改text
  function pushEmoji(emoji: string) {
    setText(text + emoji);
  }
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  //快捷键 ctrl+Enter 发送消息
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.ctrlKey && event.key === "Enter") {
      sendMessage();
    }
  };
  //清空聊天输入框的内容
  const clearMessage = () => {
    setText("");
  };

  //动态nanoid
  const sendMessage = () => {
    if (text.length > 0) {
      const now = getTime();
      updataMessages({
        message_id: nanoid(),
        content: text,
        sentAt: now,
        sender_id: "1",
        receiver_id: "2",
      });
      clearMessage();
    }
  };
  return (
    <>
      <div className="w-full h-full px-2 border-t-2 border-zinc-700 ">
        <textarea
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full h-20 input bg-zinc-900 "
        />
        <div className="w-full h-12 flex justify-between">
          <Button
            onClick={clearMessage}
            className="w-24 h-8 hover:bg-red-500 rounded border-2  border-red-200"
          >
            清空
          </Button>
          <div className="flex w-28">
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
                    fill="#ffff"
                    p-id="6474"
                  ></path>
                  <path
                    d="M700.64 580.288a32 32 0 0 0-43.712 11.68A160.608 160.608 0 0 1 518.304 672a160.576 160.576 0 0 1-138.592-80 32 32 0 0 0-55.424 32.032 224.896 224.896 0 0 0 194.016 112 224.768 224.768 0 0 0 194.016-112 32 32 0 0 0-11.68-43.744M384 512a32 32 0 0 0 32-32v-96a32 32 0 0 0-64 0v96a32 32 0 0 0 32 32M640 512a32 32 0 0 0 32-32v-96a32 32 0 0 0-64 0v96a32 32 0 0 0 32 32"
                    fill="#ffff"
                    p-id="6475"
                  ></path>
                </svg>
              </div>
            </FloatingWindow>
            <Button
              className="w-24 h-8 hover:bg-blue-500 rounded border-2 border-blue-200"
              onClick={sendMessage}
            >
              发送
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
