import {  useLoaderData, useNavigate} from "react-router-dom"

import axios from "axios"
import { useState } from "react"
import { getToken } from "../../utils/helpers/common"


export default function SingleProject(){

  const project = useLoaderData()
  const navigate = useNavigate()
  const {title, description, id, comments, image} = project
  
  
  const [formData, setFormData] = useState({
    text: "",
    project: id
    
    
  })
  
  console.log(formData)
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function createComment(e){
    e.preventDefault()
      
      try {
        const res = await axios.post(`/api/comments/`, formData, {
          validateStatus : () => true,
          headers: {
            Authorization: `Bearer ${getToken()}`,
          }
        })
        return res, navigate(``)
        
      } catch (error) {
        console.log(error)
      }
      
    }


  return (
    <><section className="project">
    <h1>{title}</h1>

    <p> <br/> <img src={image} style={{maxWidth: "400px"}}/> <br/> {description}</p>
    <p>comments:
              {comments.map(comment => (
                <li key={comment.id}>
                  <p>{comment.text}</p> 
                  </li>
              ))}</p>
    <button type='button' className='btn btn-primary btn-sm'
            style={{ marginTop: '5px' }}
            onClick={() => navigate(`/projects/${id}/edit/`)}>
              Edit Project
              </button>
              <form method='POST' onSubmit={createComment}>
                <label hidden htmlFor="text">Comment</label>
                <textarea name="text" placeholder="Let them know what you think" onChange={handleChange} value={formData.text} ></textarea>
            <button type='submit' className='btn btn-primary btn-sm' style={{ marginTop: '5px' }}  >Post comment</button>
            
          </form>
              
  </section>
  
  </>
  )
}