import React from 'react'

interface Props {
    status:"online" | "offline";
}
//判断在线的组件 （待丰富）
export default function OnlineStatus({status}: Props) {
  return (
    <>
        <div className='w-full h-6 flex items-center justify-center'>
            <div className={`' w-4 h-4 rounded-full mr-2' +${status==="online"?" bg-green-600 ":" bg-gray-500 "} `}>

            </div>
            <div className='text-sm'>
                {
                status==="online"?<p>在线</p>:<p>离线</p>
                }
            </div>
        </div>
    </>
  )
}