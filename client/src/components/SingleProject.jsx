import { useLoaderData, useNavigate } from "react-router-dom"

import axios from "axios"
import { useState } from "react"
import { getToken } from "../../utils/helpers/common"


export default function SingleProject() {

  const project = useLoaderData()
  const navigate = useNavigate()
  const { title, description, id, comments, image, project_link} = project


  const [formData, setFormData] = useState({
    text: "",
    project: id


  })

  console.log(formData)
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function createComment(e) {
    e.preventDefault()

    try {
      const res = await axios.post(`/api/comments/`, formData, {
        validateStatus: () => true,
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
    <>
      <section className="single-project">
        
        <h1>{title}</h1>

        <div className="content-container">
          <div className="image-description">
            <p>
              <br />
              <img src={image} style={{ maxWidth: "400px" }} />
              <br />
              {description}
            </p>
            <br/>
              
              <a href={project_link}>View Full Project</a>
              <br/>

            <button
              type="button"
              className="editbtn"
              style={{ marginTop: '5px' }}
              onClick={() => navigate(`/projects/${id}/edit/`)}
            >
              Edit Project
            </button>
          </div>

          <div className="comment-container">
            <h2>Comments</h2>
            <ul className="comment-list">
              {comments.map(comment => (
                <li key={comment.id} className="comment">
                  <p>{comment.text}</p>
                </li>
              ))}
            </ul>

            <form method='POST' onSubmit={createComment} className="comment-form">
              <label hidden htmlFor="text">Comment</label>
              <div className="textarea-container">
                <textarea name="text" placeholder="Let them know what you think" onChange={handleChange} value={formData.text}></textarea>
                <button type='submit' className='btn btn-primary btn-sm'>Post comment</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}