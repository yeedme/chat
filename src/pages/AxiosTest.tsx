import React from 'react'
import { axiosGetUser } from '../utils/https'
type Props = {}

export default function AxiosTest({}: Props) {
    async function fetchUser() {
        try {
          const user = await axiosGetUser();
          console.log(user);
          
          // 请求成功，处理 user 数据
        } catch (error) {
          // 请求失败，处理 error 错误信息
        }
      }
  return (
    <div className='w-96 h-96'>
        <button onClick={fetchUser}>get</button>
        <div>

        </div>
    </div>
  )
}