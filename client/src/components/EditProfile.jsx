import {Form, useActionData, useNavigate, useLoaderData} from 'react-router-dom'
import ImageUploadField from './ImageUploadField'
import { useState, useEffect  } from 'react'
import { getUserId } from '../../utils/helpers/common'

export default function EditProfile(){
  const profile = useLoaderData()
const res = useActionData()
const navigate = useNavigate()
const activeUserId = getUserId()
const {first_name, last_name, bio, linkedin, github, image} = profile
useEffect(() => {
  console.log(res)
  if (res?.status === 200) {
    navigate(`/auth/profile/${activeUserId}`)
  }
}, [res, navigate, activeUserId])

const [formData, setFormData] = useState({
  first_name: first_name,
  last_name: last_name,
  bio: bio, 
  linkedin: linkedin,
  image: image,
  github: github,
  
  
})

function handleChange(e) {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}

const handleImageChange = (newImage) => {
  setFormData({ ...formData, image: newImage })
}
  return(
  <div className="form-container">
  <Form  className='form' method="PATCH">
  <h1 className="text-center bold display-6 mb-4">Update Profile</h1>
  
    <div className="input-group">
    <input type="text" name="first_name" placeholder='First Name' onChange={handleChange} value={formData.first_name} />
    </div>
    <div className="input-group">
    <input type="text" name="last_name" placeholder='Last Name' onChange={handleChange} value={formData.last_name} />
    </div>
    <div className="input-group">
    <input type="textarea" name="bio" placeholder='Describe yourself…' onChange={handleChange} value={formData.bio}/>
    </div>
    <div className="input-group">
    <input type="url" name="linkedin" placeholder='LinkedIn' onChange={handleChange} value={formData.linkedin}/>
    </div>
    <div className="input-group">
    <input type="url" name="github" placeholder='GitHub' onChange={handleChange} value={formData.github} />
    </div>
    <div className="input-group">
    <ImageUploadField  value={formData.image} formData={formData} setFormData={setFormData} />
    </div>
    <div className='button-container'>
    <button type="button" className="btn btn-primary" onClick={() => handleImageChange(null)}>
          Choose New Image
        </button>
    <button className='btn btn-outline-primary btn-md m-4'  type="submit">Update</button>
    {res && <p className='danger'>{res.data.message}</p>}
    </div>
  </Form>
</div>
  )
}