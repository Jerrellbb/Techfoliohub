
import './App.css'
import Navigation from './components/Nav'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function App() {
  const currentPage = useLocation().pathname
  const navigation = useNavigation()

  return (
    <>
    <Navigation/>
        <main>
        {
          
          // navigation.state === 'idle' ?
            <Outlet />
            // :
            // <div className='loading'></div>
        }
      </main>
    </>
  )
}

export default App
