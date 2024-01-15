import { useEffect, useState } from 'react'
import ImageUploadField from './ImageUploadField'
import { Form, useActionData, useNavigate } from 'react-router-dom'

export default function EditProject(){
  const res = useActionData()
  const navigate = useNavigate()


  useEffect(() => {
    
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/home`)
    }
  }, [res, navigate])

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '', 
    finishDate: '',
    image: '',
  })
  
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Create Project</h1>
      <Form className='form' method="PATCH">
        <label hidden htmlFor="title">Title</label>
        <input type="text" name="title" placeholder='Title' onChange={handleChange} value={formData.title}/>
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'onChange={handleChange} value={formData.description}></textarea>
        <label hidden htmlFor="start_date">Start date</label>
        <input type="date" name="startDate" placeholder='Start date' onChange={handleChange} value={formData.startDate}/>
        <label hidden htmlFor="finish_date">Finish date</label>
        <input type="date" name="finishDate" placeholder='Finish date' onChange={handleChange} value={formData.finishDate}/>
        <label hidden htmlFor="image">Image</label>
        <ImageUploadField  value={formData.image} formData={formData} setFormData={setFormData} />
        
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button className="btn btn-pink" type="submit">Update</button>
      </Form>
    </>
  )
}