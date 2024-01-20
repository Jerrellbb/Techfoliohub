

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
import { activeUser,  getUserId, removeToken } from '../../utils/helpers/common'
import logo from "../assets/images/logo2.png"




export default function Navigation() {

  const navigate = useNavigate()
  
  
  const user = activeUser()

  const activeUserId = getUserId()


  console.log('userID -->' , activeUserId)
  const handleClick = (e) => {

    if (e.target.id === '/auth/profile/null') {
      navigate('/auth/register/')
    } else if (activeUser === user) {

      navigate(`/auth/profile/${activeUserId}`)
    } else {
      navigate(`${e.target.id}`)
    }console.log(e.target.id)
  }

  

  const handleSignOut = () => {
    removeToken()
    navigate('/')
  }

  return (

    <>


      <>
        <Navbar>
          <div className="nav-bar" >
            

            <div className="logo">
              <img src={logo} />
            </div>

            <div className='navlinks'>
              <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/'>Home</button></Nav.Link>
              <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id={`/auth/profile/${activeUserId}`}>My Profile</button></Nav.Link>
              <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/projects'>Projects</button></Nav.Link>
              <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/developers'>Developers</button></Nav.Link>
            
              {activeUserId ? (
              <Nav.Link onClick={handleSignOut}><button type='button' className='btn btn-primary' id='/signout'>Sign out</button></Nav.Link>
              ):(
                <Nav.Link onClick={() => navigate('/auth/login')}><button type='button' className='btn btn-primary' id='/login'>Login</button></Nav.Link>
              )}
            </div>
              
            
          </div>
        </Navbar></>


    </>

  )

}
