
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
import { activeUser,  getUserId, removeToken } from '../../utils/helpers/common'



export default function Navigation() {

  const navigate = useNavigate()
  // const location = useLocation()




  // get the details of the active user from id
  
  const user = activeUser()

  const activeUserId = getUserId()


  console.log('userID -->' , activeUserId)
  const handleClick = (e) => {

    if (e.target.id === '/auth/profile/null' || user === null) {
      navigate('/auth/register/')
    } else if (activeUser === user) {

      navigate(`/auth/profile/${activeUserId}`)
    } else {
      navigate(`${e.target.id}`)
    }
  }



  const handleSignOut = () => {
    removeToken()
    navigate('/signout')
  }

  return (

    <>


      <>
        <Navbar>
          <Container fluid style={{ paddingLeft: 0 }}>
            <Nav className="me-auto">


              <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/home'>Home</button></Nav.Link>
              <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id={`/auth/profile/${activeUserId}`}>My Profile</button></Nav.Link>
              <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/projects'>Projects</button></Nav.Link>
              <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/hire'>Hire</button></Nav.Link>
            </Nav>
            <Nav className='justify-content-end'>
              <Nav.Link onClick={handleSignOut}><button type='button' className='btn btn-primary' id='/signout'>Sign out</button></Nav.Link>
            </Nav>
          </Container>
        </Navbar></>


    </>

  )

}
