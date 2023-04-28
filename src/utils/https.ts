import axios, { AxiosResponse, AxiosError } from "axios";
//后端地址
const Url = "http://127.0.0.1:5173";

interface Options {
  url: string;
  success: (data: any) => void;
  error: (error: AxiosError<any>) => void;
}
export function axiosGet(options: Options) {
  axios
    .get(Url + options.url)
    .then((res: AxiosResponse<any>) => {
      options.success(res.data);
    })
    .catch((err: AxiosError<any>) => {
      options.error(err);
    });
}

export function axiosGetUser() {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: "/src/assets/user.json",
      success(data: any) {
        resolve(data.user);
      },
      error(error: AxiosError<any>) {
        reject(error);
      },
    });
  });
}
