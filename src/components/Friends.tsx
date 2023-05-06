import React, { useState } from "react";
import Input from "./Input";
export default function Friends() {
    const [search,setSearch]=useState("")
    function searchFreinds(){

    }
  return (
    <>
      <div className="w-full h-full">
            <Input type="text" placeholder="搜索好友" value={search} onChange={searchFreinds}/>
      </div>
    </>
  );
}
