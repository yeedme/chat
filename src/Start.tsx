import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Login from "./pages/Login";
type Props = {};
let t1 = gsap.timeline({
  defaults: {
    ease: "power4.inOut",
    duration: 1.1,
  },
});
export default function Start({}: Props) {
  const [loginPageShow, setLoginPageShow] = useState<boolean>(false);
  function closeStartBlackBox() {
    t1.to(".startWhiteLogo", {
      display: "none",
    })
      .to(
        ".startBlackBox",
        {
          height: 0,
        },
        "-=0.9"
      )
      .to(
        ".loginPageShow",
        {
          display: "block",
        },
        "-=1.1"
      )
      .to(
        ".StartTextBox",
        {
          height: 0,
          display: "hidden",
        },
        "-=1.1"
      )
      .to(
        ".StartButtonBox",
        {
          y: "100%",
        },
        "-=1.1"
      )
      .from(".loginPageShow", {
        x: "-100%",
      })
      //动画执行完在 展示login组件 从而触发login组件初始渲染动画
      .eventCallback("onComplete", () => {
        setLoginPageShow(true);
      });
  }

  useEffect(() => {
    let gsct = gsap.context(() => {});
    return () => gsct.revert();
  }, []);

  return (
    <>
      <div className="w-full h-full relative flex flex-col justify-between">
        {/* login组件 */}
        <div className="absolute hidden overflow-hidden loginPageShow">
          {loginPageShow ? <Login /> : ""}
        </div>
        {/* logo */}
        <div className="w-full md:h-96 h-72 bg-slate-700 startBlackBox md:rounded-b-5xl rounded-b-4xl relative flex justify-center">
          <div className="md:w-56 md:h-56 w-44 h-44 rounded-full bg-slate-100 absolute top-1/2 flex justify-center items-center md:text-3xl text-2xl startWhiteLogo">
            CCCC
            <br />
            chat
          </div>
        </div>
        {/* 标语 */}
        <div className=" flex flex-col items-center StartTextBox overflow-hidden ">
          <h2 className="text-3xl  font-semibold my-2 shrink-0">
            来自github.yeedme打造
          </h2>
          <h2 className="text-2xl my-2 shrink-0">简单，便捷，高效</h2>
        </div>
        {/* 动画触发按钮 */}
        <div className="w-screen h-auto flex flex-col items-center pb-4 StartButtonBox">
          <button
            className="w-72 h-24 bg-emerald-200 rounded-3xl font-semibold text-2xl"
            onClick={closeStartBlackBox}
          >
            免费使用
          </button>
        </div>
      </div>
    </>
  );
}
