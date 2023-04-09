import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { emailAndPasswordInputRule } from "../utils";

//优化：可以通过插件 优化svg引入方式 。
function WechatLogin() {
  return (
    <>
      <div
        className="w-full h-12 flex justify-center items-center"
        key="WechatLogin"
      >
        <div className="w-8 h-8 mr-2">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2671"
            width="100%"
            height="100%"
          >
            <path
              d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
              fill="#00C800"
              p-id="2672"
            ></path>
            <path
              d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
              fill="#00C800"
              p-id="2673"
            ></path>
          </svg>
        </div>
        <p>微信账号登录</p>
      </div>
    </>
  );
}
function QQLogin() {
  return (
    <>
      <div
        className="w-full h-12 flex justify-center items-center"
        key="QQLogin"
      >
        <div className="w-8 h-8 mr-2">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5285"
            width="100%"
            height="100%"
          >
            <path
              d="M909.937778 664.803556c-18.432-110.876444-95.829333-183.523556-95.829333-183.523556 11.064889-100.664889-29.496889-118.528-29.496889-118.528C776.106667 51.313778 517.432889 56.775111 512 56.917333c-5.432889-0.142222-264.135111-5.603556-272.611556 305.863111 0 0-40.561778 17.863111-29.496889 118.528 0 0-77.397333 72.647111-95.829333 183.523556 0 0-9.841778 187.335111 88.462222 22.954667 0 0 22.129778 62.435556 62.663111 118.528 0 0-72.504889 25.486222-66.332444 91.761778 0 0-2.474667 73.898667 154.823111 68.835556 0 0 110.563556-8.903111 143.758222-57.344l29.240889 0c33.166222 48.440889 143.758222 57.344 143.758222 57.344 157.240889 5.091556 154.794667-68.835556 154.794667-68.835556 6.115556-66.247111-66.332444-91.761778-66.332444-91.761778 40.533333-56.092444 62.663111-118.528 62.663111-118.528C919.751111 852.167111 909.937778 664.803556 909.937778 664.803556L909.937778 664.803556zM909.937778 664.803556"
              fill="#272636"
              p-id="5286"
            ></path>
          </svg>
        </div>
        <p>QQ账号登录</p>
      </div>
    </>
  );
}

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [buttonAble, setButtonAble] = useState<boolean>(false);
  const passwordLength = password.length;

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (passwordLength >= 6) {
      setButtonAble(true);
    } else {
      setButtonAble(false);
    }
  };
  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  };
  useEffect(()=>{
    setPassword('123456');
    setUsername('yeedme@github.com');
  },[])
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center ">
        <div className="w-45 h-screen  p-8  flex flex-col justify-between">
          {/* 标语 */}
          <div className="text-center shrink-0 loginPagesContext">
            <h2 className="text-3xl  font-semibold my-2 shrink-0">
              来自github.yeedme打造
            </h2>
            <h2 className="font-semibold my-2 shrink-0">简单，便捷，高效</h2>
          </div>
          <form onSubmit={submitData} className="shrink-0 loginPagesForm">
            {/* 邮箱输入框 */}
            <div className="w-auto h-auto mb-6">
              <h2 className="text-xl mb-4 font-semibold">你的邮箱地址</h2>
              <div className="w-auto h-auto border-2 border-black p-2 rounded-xl">
                <Input
                  className="h-8 w-64 text-xl "
                  value={username}
                  type="text"
                  placeholder="yeedme@github.com"
                  onChange={handleUsernameChange}
                  pattern={emailAndPasswordInputRule}
                />
              </div>
            </div>
            {/* 密码输入框 */}
            <div className="w-auto h-auto mb-6">
              <h2 className="text-xl mb-4 font-semibold">对应的密码</h2>
              <div className="w-auto h-auto border-2 border-black p-2 rounded-xl">
                <Input
                  className="h-8 w-64 text-xl "
                  value={password}
                  type="password"
                  placeholder="密码长度最短为6位"
                  onChange={handlePasswordChange}
                  pattern={emailAndPasswordInputRule}
                />
              </div>
            </div>
            {/* 提交按钮 */}
            <div>
              <Button
                className={`${
                  buttonAble ? "  bg-lime-300  " : " bg-gray-200 text-white cursor-not-allowed "
                } +" h-12 w-full rounded-xl font-semibold text-xl transition-all duration-300 " `}
                children={"登 入"}
                disabled={!buttonAble}
                type="submit"
              />
            </div>
            <div className="h-8 w-full flex justify-between items-center text-xl text-gray-600 mt-2 font-semibold">
              <div className="w-auto h-auto flex items-center">
                <input type="checkbox" className="w-6 h-6 mr-2" />
                记住密码
              </div>
              <a>注册账号</a>
            </div>
          </form>
          <div className="w-full shrink-0 mb-8">
            <div className="w-full text-center font-semibold text-xl text-gray-400 mb-2">
              其他登入方式
              <hr />
            </div>
            <Button
              className="h-12 w-full rounded-xl border-2 font-semibold text-xl my-2 text-gray-600"
              children={WechatLogin()}
            />
            <Button
              className="h-12 w-full rounded-xl border-2 font-semibold text-xl my-2 text-gray-600"
              children={QQLogin()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
