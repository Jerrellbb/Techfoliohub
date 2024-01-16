import {Form, useActionData, useNavigate} from 'react-router-dom'
import ImageUploadField from './ImageUploadField'
import { useState, useEffect  } from 'react'
import { getUserId } from '../../utils/helpers/common'

export default function EditProfile(){
const res = useActionData()
const navigate = useNavigate()
const activeUserId = getUserId()

useEffect(() => {
  console.log(res)
  if (res?.status === 201) {
    navigate(`/auth/profile/${activeUserId}`)
  }
}, [res, navigate, activeUserId])

const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  bio: "", 
  linkedin: "",
  image: "",
  github: "",
  
  
})
  return(
  <div className="form-container">
  <Form  className='form' method="PATCH">
  <h1 className="text-center bold display-6 mb-4">Update Profile</h1>
  
    <div className="input-group">
    <input type="text" name="first_name" placeholder='First Name' value={formData.first_name} />
    </div>
    <div className="input-group">
    <input type="text" name="last_name" placeholder='Last Name'value={formData.last_name} />
    </div>
    <div className="input-group">
    <input type="textarea" name="bio" placeholder='Describe yourself…' value={formData.bio}/>
    </div>
    <div className="input-group">
    <input type="url" name="linkedin" placeholder='LinkedIn' value={formData.linkedin}/>
    </div>
    <div className="input-group">
    <input type="url" name="github" placeholder='GitHub' value={formData.github} />
    </div>
    <div className="input-group">
    <ImageUploadField  value={formData.image} formData={formData} setFormData={setFormData} />
    </div>
    
    <button className='btn btn-outline-primary btn-md m-4'  type="submit">Update</button>
    {res && <p className='danger'>{res.data.message}</p>}
  </Form>
</div>
  )
}