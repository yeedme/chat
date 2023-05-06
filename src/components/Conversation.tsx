import React from "react";
import MessageInterface from "./MessageInterface";
type Props = {};

export default function Conversation({}: Props) {
  return (
    <>
      <div className="w-full h-full   ">     
        <MessageInterface/>
      </div>
    </>
  );
}
