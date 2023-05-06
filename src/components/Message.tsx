import React, { useState } from "react";
import Avatar from "./Avtar";
import jabala from "../assets/img/jabala.svg";
import jack from "../assets/img/jack.svg";
import Tooltip from "./Tooltip";
import { useSelector } from "react-redux";
import { selectloginId } from "../store/loginInformation";
//聊天对话框
type ChatMessageProps = {
  message_id: string;
  content: string;
  sentAt: string;
  sender_id: string;
  receiver_id: string;
};

const Message: React.FC<ChatMessageProps> = ({
  content,
  sentAt,
  message_id,
  sender_id,
  receiver_id,
}) => {
  //判断是否自己发送的消息
  const isSentByMe: boolean = sender_id == useSelector(selectloginId);
  const messageClass = isSentByMe ? " bg-blue-500  " : " bg-zinc-700 ";
  const [tooltipShow, setTooltipShow] = useState<boolean>(false);
  function handlerClick() {
    setTooltipShow((tooltipShow) => !tooltipShow);
  }
  function MoreOption() {
    return (
      <>
        <div className="flex w-full ">
          <h2 className=" mr-2 ">复制</h2>
          <h2>删除</h2>
        </div>
      </>
    );
  }
  return (
    <div
      className={`"w-auto h-auto mb-2 text-white  " + ${
        isSentByMe ? "  flex-row-reverse flex " : " flex "
      }`}
    >
      <div className="w-14 h-14 p-2 rounded-md mx-2">
        <Avatar src={isSentByMe ? jabala : jack} alt="头像" />
      </div>
      <div
        className={` ${messageClass}w-auto max-w-96 h-auto shrink-0 p-2 rounded-md shadow-md flex items-center`}
      >
        <Tooltip content={<MoreOption />} tooltipShow={tooltipShow}>
          <div className=" whitespace-normal break-all" onClick={handlerClick}>
            {content}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Message;
