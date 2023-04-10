import React from 'react'


type Props = {

}



export default function Nav({}: Props) {
  return (
    <>
        <div className='md:w-16 md:h-screen bg-red-100 w-screen h-16  flex md:block justify-around '>
        <div className='w-full h-20 bg-blue-100 my-2 md:block hidden'/>
            <div className='md:w-full w-16 h-16 bg-blue-100 md:my-2'/>
            <div className='md:w-full w-16 h-16 bg-blue-100 md:my-2'/>
            <div className='md:w-full w-16 h-16 bg-blue-100 md:my-2'/>
            <div className='md:w-full w-16 h-16 bg-blue-100 md:my-2'/>
        </div>
    </>
  )
}