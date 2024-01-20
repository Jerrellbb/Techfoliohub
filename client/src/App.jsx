import Spinner from 'react-bootstrap/Spinner'
import './App.css'
import Navigation from './components/Nav'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const navigation = useNavigation()

  return (
    <>
    <Navigation/>
        <main>
        {
          
          navigation.state === 'idle' ?
            <Outlet />
            :
            <div className='loading-container'>
              <div className='loading'></div>
            </div>
              
                
            
        }
      </main>
      <Footer/>
    </>
  )
}

export default App
