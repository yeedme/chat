import React, { RefObject, useEffect } from "react";
//监听点击事件dom以外的元素
//需要一个监听dom(ref),一个回调函数
// 参考了很多类似的写法 个人觉得这个hook用子组件内部好一些，如果在父组件下调用比较麻烦，当然子组件内写稍微看着有点蠢（其实父组件调用没搞懂 哈哈哈）
interface Props {}
// Ref.current?.contains(e.target as HTMLElement) 和  ref.current && !ref.current.contains(event.target as Node) 差不多
// (?.)目的避免了 ref.current为 nul 或undefind。 进而避免使用 contains()报错 。
const useClickOutside = ( Ref: React.RefObject<HTMLDivElement> , handler: () => void  ) => {
  const onClickListner = (e: MouseEvent) => {
    if (!Ref.current?.contains(e.target as HTMLElement)) {
      handler();
    }
    return;
  };
  

  useEffect(() => {
    document.addEventListener("mousedown", onClickListner);
    return () => document.removeEventListener("mousedown", onClickListner);
  }, []);
};

export default useClickOutside;
