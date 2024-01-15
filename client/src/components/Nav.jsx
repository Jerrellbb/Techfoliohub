
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate, useLocation } from 'react-router-dom'
import {  activeUser, getToken, getUserId, removeToken } from '../../utils/helpers/common'
import axios from 'axios'


export default function Navigation() {

  const navigate = useNavigate()
  // const location = useLocation()

 


  // get the details of the active user from id
  const token = getToken()
  activeUser()
  getUserId()
  let activeUserId = getUserId()

  
console.log(activeUserId)
  const handleClick = (e) => {
    if (e.target.id !== '/auth/profile/:id') {
      navigate(`${e.target.id}`)
    } else {
      if (!activeUser()) {
        navigate('/home')
      } else {
        navigate(`/auth/profile/${activeUserId}`)
      }
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
                <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/#'>Hire</button></Nav.Link>
              </Nav>
              <Nav className='justify-content-end'>
                <Nav.Link onClick={handleSignOut}><button type='button' className='btn btn-primary' id='/signout'>Sign out</button></Nav.Link>
              </Nav>
            </Container>
          </Navbar></>

      
    </>

  )

  }
