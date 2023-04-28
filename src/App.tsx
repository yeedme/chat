import React, { useEffect, useRef, useState } from "react";
import Message from "./components/Message";
import TopColumn from "./components/TopColumn";
import InputBox from "./components/InputBox";
import MessageInterface from "./components/MessageInterface";
const t = {
  content: "I am fine, thanks. And you?I am fine, thanks. And you?",
  sender: "Bob",
  sentAt: "2023-04-12T10:01:00.000Z",
  isSentByMe: false,
};
const App: React.FC = () => {
  const [messages, setMessage] = useState([
    {
      content: "Hello, how are you?",
      sender: "Alice",
      sentAt: "2023-04-12T10:00:00.000Z",
      isSentByMe: false,
    },
    {
      content: "I am fine, thanks. And you?",
      sender: "Bob",
      sentAt: "2023-04-12T10:01:00.000Z",
      isSentByMe: true,
    },
    {
      content: "I am fine, thanks. And you?",
      sender: "Bob",
      sentAt: "2023-04-12T10:01:00.000Z",
      isSentByMe: true,
    },
    {
      content: "I am fine, thanks. And you?",
      sender: "Bob",
      sentAt: "2023-04-12T10:01:00.000Z",
      isSentByMe: true,
    },
    {
      content: "I am fine, thanks. And you?",
      sender: "Bob",
      sentAt: "2023-04-12T10:01:00.000Z",
      isSentByMe: true,
    },
    {
      content: "Hello, how are you?",
      sender: "Alice",
      sentAt: "2023-04-12T10:00:00.000Z",
      isSentByMe: false,
    },
    {
      content: "I am fine, thanks. And you?I am fine, thanks. And you?",
      sender: "Bob",
      sentAt: "2023-04-12T10:01:00.000Z",
      isSentByMe: true,
    },
    {
      content: "I am fine, thanks. And you?I am fine, thanks. And you?",
      sender: "Bob",
      sentAt: "2023-04-12T10:01:00.000Z",
      isSentByMe: true,
    },
    {
      content: "I am fine, thanks. And you?I am fine, thanks. And you?",
      sender: "Bob",
      sentAt: "2023-04-12T10:01:00.000Z",
      isSentByMe: true,
    },
    {
      content: "I am fine, thanks. And you?I am fine, thanks. And you?",
      sender: "Bob",
      sentAt: "2023-04-12T10:01:00.000Z",
      isSentByMe: true,
    },
  ]);

  const messageContain = useRef<HTMLDivElement>(null);

  //滚轮到底部
  const scrollBottom = () => {
    const container = messageContain.current;
    if (container) {
      container.scrollTop = container.scrollHeight / 2;
    }
  };
  //模拟更新数据
  useEffect(() => {
    const pushTime = setTimeout(() => {
      setMessage([...messages, t]);
    }, 5000);
    scrollBottom();
    return () => clearTimeout(pushTime);
  }, []);

  return (
    <div className="flex ">
      <div className="w-1/3">
        <MessageInterface />
      </div>
      <div className="md:w-2/3 w-full h-screen grid grid-rows-pcLayout">
        <TopColumn />
        <div className="w-full h-full overflow-auto " ref={messageContain}>
          {messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
        </div>
        <InputBox />
      </div>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import EmojieArea from "./components/EmojieArea";
// import { axiosGet } from "./utils/https";
// import axios, { AxiosResponse, AxiosError } from "axios";
// export default function App() {
//   const [text, setText] = useState<string>("hello word!");
//   const handlePushEmoji = (emoji: any) => {
//     setText(text + emoji);
//   };
//   const send = () => {
//     axios
//       .post("http://localhost:3008/api/Test", { text })
//       .then((res: AxiosResponse<any>) => {
//         console.log("请求成功", res);
//         // 对返回的数据进行处理...
//       })
//       .catch((error: AxiosError<any>) => {
//         console.log("请求失败", error);
//         // 对错误进行处理...
//       });
//   };
//   const [DBtext,setDBtext]=useState<string>("")
//   async function getData() {
//     try {
//       const response = await axios.get('http://localhost:3008/api/Test');
//       console.log(response.data); // 输出查询结果
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   return (
//     <>

//       <div className="w-screen ">
//       <EmojieArea pushEmoji={handlePushEmoji} />
//       </div>

//     </>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import useClickOutside from "./hooks/useClickOutside";

// interface  Props  {
//   setState:()=>void
// };
// function Obox({setState}:Props ){
//   const emojiRef = useRef<HTMLDivElement>(null);
//   const clickOutside = () => {
//     setState()
//     console.log("点击外部");

//   };
//   useClickOutside(emojiRef, clickOutside);
//   return <div className=" w-12 h-12 bg-blue-100 " ref={emojiRef} />;
// }
// export default function App({}: Props) {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <div className="w-screen h-screen bg-red-100">
//         <button
//           className="w-12 h-12 bg-green-100"
//           onClick={() => setShow(true)}
//         >
//           click
//         </button>
//         {show ? <Obox setState={()=>setShow(false)}/> : ""}
//       </div>
//     </>
//   );
// }
