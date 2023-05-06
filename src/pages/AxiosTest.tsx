import React, { useState } from "react";
import { axiosPostChatMessage,axiosGetRecentMessgae } from "../utils/https";
import { useSelector, useDispatch } from "react-redux/es/exports";


interface MessageType {
  message_id: string;
  content: string;
  sentAt: string;
  sender_id: string;
  receiver_id: string;
}

export default function AxiosTest() {
  const [messagaData, setMessagaData] = useState<any>([]);

  const reduxLoginId = 1;


  const dispatch = useDispatch();
  
  async function fetchUser() {
    const newMeassage:MessageType={
      message_id: "a123123",
      content: "111111你好，明天见！🎵",
      sentAt: "2023-05-01T06:30:00.000Z",
      sender_id: '1',
      receiver_id: '2',
    }
    try {
      const oldData: any = await axiosGetRecentMessgae({id:"2"});
      console.log(oldData);
      
      // 请求成功，处理 user 数据
    } catch (error) {
     console.log(error);
     
    }
  }
  return (
    <div className="w-96 h-96">
      <button onClick={fetchUser} className="border-2 w-24 h-12">
        get
      </button>


 
      <div>
        {/* {
          messagaData.map((t)=>{
            return (  

            )
          })
        } */}
      </div>
    </div>
  );
}
