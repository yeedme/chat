import React from 'react'
import Start from './components/Start'
import Login from './pages/Login'
import Nav from './components/Nav'
import Conversation from './components/Conversation'
function App() {
  return (
    <div className='w-screen h-screen'>
      {/* <Start/> */}
      {/* <Login/> */}
      <Conversation/>
    </div>
  )
}

export default App