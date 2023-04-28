import React from "react";
import Avatar from "./Avtar";
import jabala from "../assets/img/jabala.svg";
import jack from "../assets/img/jack.svg";
//聊天对话框
type ChatMessageProps = {
  content: string;
  sender: string;
  sentAt: string;
  isSentByMe: boolean;
};

const Message: React.FC<ChatMessageProps> = ({
  content,
  sender,
  sentAt,
  isSentByMe,
}) => {
  const messageClass = isSentByMe ? " bg-blue-100" : " bg-red-100";
  const datetime = new Date(sentAt).toLocaleString();

  return (
    <div
      className={`"w-full h-auto mb-2  " + ${
        isSentByMe ? "  flex-row-reverse flex " : " flex "
      }`}
    >
      <div className="w-12 h-12 p-2 rounded-md mx-2">
        <Avatar src={isSentByMe ? jabala : jack} alt="头像" />
      </div>
      <div
        className={` ${messageClass} w-auto max-w-96 h-auto shrink-0 p-2 rounded-md shadow-md` }
      >
        <div className=" whitespace-normal break-all ">{content}</div>
      </div>
    </div>
  );
};

export default Message;
