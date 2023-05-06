import React, { useEffect, useState } from "react";
import svgFilter from "../utils/svgFilter";
import { axiosGetRecentMessgae } from "../utils/https";
import { chattingInformationType } from "../Layout/Layout";
interface Props {
  getChattingInformation: (object: chattingInformationType) => void;
}

interface recentMessage {
  id: string;
  name: string;
  avatar_img: string;
  status: "online" | "offline";
  content: string;
  date: string; // 可以是字符串或日期对象
}

//过滤时间字符串
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

export default function MessageInterface({ getChattingInformation }: Props) {
  const [recentMessage, setRecentMessage] = useState<recentMessage[]>([]);
  async function getData() {
    const reslut: any = await axiosGetRecentMessgae("");
    setRecentMessage(reslut);
  }

  function hanlderInfomation(message: recentMessage) {
    const chfm: chattingInformationType = {
      chattingId: message.id,
      name: message.name,
      status: message.status,
    };
    getChattingInformation(chfm)
  }
 
  useEffect(() => {
    getData();
  }, []);
  //加载完成后向服务器请求数据
  useEffect(()=>{
    if(recentMessage.length>0){
      hanlderInfomation(recentMessage[0])
    }
  },[recentMessage])

  return (
    <>
      {recentMessage.map((t) => {
        return (
          <div
            key={t.id}
            className="w-full h-20  flex justify-between items-center px-2 text-sm rounded-md cursor-pointer bg-zinc-800 mb-2 text-white hover:bg-zinc-700  hover:shadow-md   "
            onClick={() => hanlderInfomation(t)}
          >
            <div className="flex w-1/2 ">
              {/* 头像和名字 */}
              <img
                src={svgFilter({ name: t.avatar_img })}
                className="w-16 h-16 rounded shrink-0"
              ></img>
              <div className="flex flex-col h-16 w-full justify-around ml-2">
                <div className="shrink-0 w-auto">{t.name}</div>
                <div className="w-full whitespace-nowrap overflow-hidden text-gray-500 text-overflow-ellipsis">
                  {/* 文本预览 */}
                  {t.content}
                </div>
              </div>
            </div>
            <div className="w-atuo max-w-20 h-16 ml-2 mt-2">
              {/* 时间预览 */}
              <h2>{formatDate(t.date)}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}
