import { useEffect, useState } from 'react'
import ImageUploadField from './ImageUploadField'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { activeUser } from '../../utils/helpers/common'
export default function CreateProject(){
  const res = useActionData()
  const navigate = useNavigate()


  useEffect(() => {
    
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/projects/${res.data.id}`)
      console.log(res.data)
    }
  }, [res, navigate])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "", 
    end_date: "",
    image: "",
    skills: [],
    owner: activeUser()
  })
  
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleSkillsChange(e) {
    
    const skillsArray = e.target.value.split(',').map(skill => skill.trim())
    setFormData({ ...formData, skills: skillsArray })
  }

  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Create Project</h1>
      <Form className='form' method="POST">
        <label hidden htmlFor="title">Title</label>
        <input type="text" name="title" placeholder='Title' onChange={handleChange} value={formData.title}/>
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'onChange={handleChange} value={formData.description}></textarea>
        <label hidden htmlFor="start_date">Start date</label>
        <input type="date" name="start_date" placeholder='Start date' onChange={handleChange} value={formData.start_date}/>
        <label hidden htmlFor="end_date">End date</label>
        <input type="date" name="end_date" placeholder='End date' onChange={handleChange} value={formData.end_date}/>
        <label hidden htmlFor="image">Image</label>
        <label hidden htmlFor="skills">Skills</label>
        <input type="text" name="skills" placeholder='skills used e.g CSS' onChange={handleSkillsChange} value={formData.skills.join(', ')}/>
        <ImageUploadField  value={formData.image} formData={formData} setFormData={setFormData} />
        
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button className="btn btn-pink" type="submit">Create</button>
      </Form>
    </>
  )
}