import {useState } from 'react'
import ImageUploadField from './ImageUploadField'
import {   useNavigate } from 'react-router-dom'
import {  getToken } from '../../utils/helpers/common'
import axios from 'axios'
export default function CreateProject(){
  
  const navigate = useNavigate()
  // const activeUserId = getUserId()

  

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "", 
    end_date: "",
    image: "",
    project_link: "",
    skills: [],
    comments: []
    
    
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


  async function createProject(e){
  e.preventDefault()
    
    try {
      const res = await axios.post('/api/projects/', formData, {
        validateStatus : () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        }
      })
      navigate(`/projects/${res.data.id}`)
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Create Project</h1>
      <form className='form' method="POST" onSubmit={createProject}>
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
        
        <button className="btn btn-pink" type="submit">Create</button>
      </form>
    </>
  )
}