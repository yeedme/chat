import axios, { AxiosResponse, AxiosError } from "axios";
interface Message {
  message_id: string;
  content: string;
  sentAt: string;
  sender_id: string;
  receiver_id: string;
}
//后端地址
const Url = "http://127.0.0.1:3008";
interface Options {
  url: string;
  params: any;
  success: (data: any) => void;
  error: (error: AxiosError<any>) => void;
}

export function axiosGet(options: Options) {
  axios
    .get(Url + options.url, { params : options.params })
    .then((res: AxiosResponse<any>) => {
      options.success(res.data);
    })
    .catch((err: AxiosError<any>) => {
      options.error(err);
    });
}
export function axiosPost(options: Options) {
  axios
    .post(Url + options.url, { params: options.params })
    .then((res: AxiosResponse<any>) => {
      options.success(res.data);
    })
    .catch((err: AxiosError<any>) => {
      options.error(err);
    });
}
//获取消息
export function axiosGetChatMessage(sender_id: string, receiver_id: string) {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: "/api/chatMessage",
      params: { sender_id, receiver_id },
      success(data: any) {
        resolve(data);
      },
      error(error: AxiosError<any>) {
        reject(error);
      },
    });
  });
}
//添加消息
export function axiosPostChatMessage(params: Message) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: "/api/chatMessage",
      params,
      success(data: any) {
        resolve(data);
      },
      error(error: AxiosError<any>) {
        reject(error);
      },
    });
  });
}

export function axiosGetRecentMessgae(params:any | ""){
  return new Promise((resolve,reject)=>{
    axiosGet({
      url:"/api/recentMessage",
      params,
      success(data:any){
        resolve(data)
      },
      error(error:AxiosError<any>){
        reject(error)
      }
    })
  })
}