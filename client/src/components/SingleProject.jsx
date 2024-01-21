import { useLoaderData, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"
import { useState } from "react"
import { getToken, getUserId } from "../../utils/helpers/common"


export default function SingleProject() {

  const project = useLoaderData()
  const navigate = useNavigate()
  const { title, description, id, comments, image, project_link, owner, owner_username } = project

  console.log(comments)
  const [formData, setFormData] = useState({
    text: "",
    project: id


  })


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
      if (res.status === 201) {
        return res, navigate(``)

      } else if (res.status === 401) {
        return toast.error('You must be logged in to leave a comment')
      }
    } catch (error) {
      console.log(error)

    }
  }

  async function removeComment(e, comment_id) {
    e.preventDefault()

    try {
      const res = await axios.delete(`/api/comments/${comment_id}/`, {
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      console.log(res)
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
              <strong>About:</strong> {description}
            </p>
            <br />

            <a href={project_link}>View Full Project</a>
            <br />

            {getUserId() !== owner &&
              <button
                type="button"
                className="editbtn"
                style={{ marginTop: '5px' }}
                onClick={() => navigate(`/auth/profile/${owner}/`)}
              >
                View {owner_username}&apos;s Profile
              </button>}
            {getUserId() === owner &&
              <button
                type="button"
                className="editbtn"
                style={{ marginTop: '5px' }}
                onClick={() => navigate(`/projects/${id}/edit/`)}
              >
                Edit Project
              </button>}
          </div>


          <div className="comment-container">
            <h2>Comments</h2>
            <div className="scrollbar">
              <ul className="comment-list">
                {comments.map(comment => (
                  <li key={comment.id} className="comment">
                    <div className="comment-content">
                      <p>{comment.text}</p>
                    </div>
                    {getUserId() === comment.owner && (
                      <div className="remove-comment-container">
                        <form method='POST' value={comment.id} onSubmit={removeComment}>
                          <button onClick={(e) => removeComment(e, comment.id)}>❌</button>

                        </form>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

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
      <ToastContainer />
    </>
  )
}