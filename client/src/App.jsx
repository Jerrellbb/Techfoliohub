import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
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
