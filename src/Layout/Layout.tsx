import React, { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav";
import MessageInterface from "../components/MessageInterface";
import InputBox from "../components/InputBox";
import TopColumn from "../components/TopColumn";
import Message from "../components/Message";
import { axiosGetChatMessage, axiosPostChatMessage } from "../utils/https";
//获取后台聊天消息，用于message 遍历
interface messageType {
  message_id: string;
  content: string;
  sentAt: string;
  sender_id: string;
  receiver_id: string;
}

// TopColumn点击后 获取正在聊天对方的ID,name,便于获取相关信息
export interface chattingInformationType {
  chattingId: string; //正在聊天对方的ID
  name: string;
  status:'online'| "offline"
}

export default function Layout() {
  const [messages, setMessage] = useState<messageType[]>([]);
  //当前聊天对象 状态 ID 用于更新 Message和 TopColumn
  const [chattingInformation,setChattingInformation]=useState<chattingInformationType>({
    chattingId:"2",
    name:"加载中",
    status:"offline"
  })
  async function postMessage(newMessage: messageType) {
    await axiosPostChatMessage(newMessage);
  }
  //更新聊天数据
  const updataMessages = (newMessage: messageType) => {
    const { message_id, content, sentAt, sender_id, receiver_id } = newMessage;
    postMessage({
      message_id,
      content,
      sentAt,
      sender_id,
      receiver_id,
    });
    setMessage((messages) => [
      ...messages,
      {
        message_id,
        content,
        sentAt,
        sender_id,
        receiver_id,
      },
    ]);
  };

    //当前聊天对象 状态 ID 用于更新 Message和 TopColumn
  const getChattingInformation=(information:chattingInformationType)=>{
   setChattingInformation(information);
  }

  //绑定聊天消息框 用于scrollBottom()
  const messageContain = useRef<HTMLDivElement>(null);

  //滚轮到底部
  const scrollBottom = () => {
    const container = messageContain.current;
    if (container) {
      container.scrollTop = container.scrollHeight / 2;
    }
  };
//更新message 
  async function fetchUser(chattingId:string) {
    try {
      const oldData: any = await axiosGetChatMessage("1", chattingId);
      setMessage(oldData);
    } catch (error) {
      // 请求失败，处理 error 错误信息
    }
  }

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  //模拟更新数据
  useEffect(() => {
    scrollBottom();
  }, [messages]);

  useEffect(()=>{
     fetchUser(chattingInformation.chattingId)
  },[chattingInformation])

  return (
    <>
      <div className="grid grid-cols-pcLayout w-full h-screen gap-y-1 text-white">
        <Nav />
        <div className="w-full h-full bg-black border-x-2 border-zinc-700">
          <MessageInterface getChattingInformation={getChattingInformation}/>
        </div>
        <div className="w-full h-screen grid grid-rows-pcChatLayout">
          <TopColumn chattingInformation={chattingInformation}/>
          <div className="w-full h-full overflow-auto " ref={messageContain}>
            {messages.map((message) => (
              <Message key={message.message_id} {...message} />
            ))}
          </div>
          <InputBox updataMessages={updataMessages} />
        </div>
      </div>
    </>
  );
}
