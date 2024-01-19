import { Link } from 'react-router-dom'


import hero from '../assets/images/heroimage.png'
import { activeUser } from '../../utils/helpers/common'
export default function Home() {
  return (
    <>
      <div className='main'>
        <section className="homescreen">
          <h1>TechFolio</h1>
          <h2>Unite, Collaborate, Code: Fostering a Community of Developers</h2>
        </section>
        <section className="hero" > <img src={hero} /> </section>
        {activeUser() === null && (
        <Link to="/auth/register"><button className='sign-up'>Sign Up!</button></Link>
        )}
      </div>
    </>
  )
}