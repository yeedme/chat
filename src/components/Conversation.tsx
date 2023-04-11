import React from "react";
import MessageInterface from "./MessageInterface";
type Props = {};

export default function Conversation({}: Props) {
  return (
    <>
      <div className="md:w-1/3 w-full h-screen p-2">
        <MessageInterface/>
      </div>
    </>
  );
}
