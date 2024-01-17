import { useState } from 'react'
import ImageUploadField from './ImageUploadField'
import {   useNavigate, useLoaderData  } from 'react-router-dom'
import {  getToken, getUserId } from '../../utils/helpers/common'
import axios from 'axios'

export default function EditProject(){
  
  const navigate = useNavigate()
  
  const project = useLoaderData()
  console.log(project)
  const {end_date, start_date, id} = project
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: start_date, 
    end_date: end_date,
    image: "",
    project_link: "",
    skills: [],
    
    
  })
  console.log(formData)
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleSkillsChange(e) {
    
    const skillsArray = e.target.value.split(',').map(skill =>({ "name": skill.trim() }))
    setFormData({ ...formData, skills: skillsArray })
    console.log(skillsArray)
  }


  async function editProject(e){
  e.preventDefault()
    
    try {
      
  console.log(project)
  
      const res = await axios.patch(`/api/projects/${id}/`, formData, {
        validateStatus : () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        }
      })
      console.log(res)
      navigate(`/projects/${res.data.id}`)
    } catch (error) {
      console.log(error)
    }
    
  }
  
  async function deleteProject() {
    try {
      const res = await axios.delete(`/auth/profile/${getUserId()}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        }
      })
      console.log(res)
      // Redirect to a page or perform any other actions after deletion
      navigate(`/auth/profile/${getUserId()}`)
    } catch (error) {
      console.log(error)
    }
}

  
  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Edit Project</h1>
      <form className='form' method="PATCH" onSubmit={editProject}>
        <label hidden htmlFor="title">Title</label>
        <input type="text" name="title" placeholder='Title' onChange={handleChange} value={formData.title}/>
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'onChange={handleChange} value={formData.description}></textarea>
        <label hidden htmlFor="start_date">Start date</label>
        <input type="date" name="start_date" placeholder='Start date' onChange={handleChange} value={formData.start_date}/>
        <label hidden htmlFor="end_date">End date</label>
        <input type="date" name="end_date" placeholder='End date' onChange={handleChange} value={formData.end_date}/>
        <label hidden htmlFor="project_link">Project Link</label>
        <input type="url" name="project_link" placeholder='Add a link to your project' onChange={handleChange} value={formData.project_link}/>
        <label hidden htmlFor="skills">Skills</label>
        <input type="text" name="skills" placeholder='Skills used (e.g., CSS)' onChange={handleSkillsChange} value={formData.skills.map(skill => skill.name).join(', ')}/>
        <label hidden htmlFor="image">Image</label>
        <ImageUploadField  value={formData.image} formData={formData} setFormData={setFormData} />
        
        <button className="btn btn-pink" type="submit">Edit</button>
      </form>
      <form method='POST'>
            <button type='submit' className='btn btn-primary btn-sm' style={{ marginTop: '5px' }} onClick={deleteProject}>Delete Project</button>
          </form>
    </>
  )
} 