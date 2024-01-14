import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

export async function createProject(request){

  const data = await formToObj(request)
  return await axios.post('/api/projects/', data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}
export async function editProject(request, id){

  const data = await formToObj(request)
  return await axios.patch(`/api/projects/${id}`, data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function deleteProject(id){

  await axios.delete(`/api/projects/${id}`,{
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return redirect(`/auth/${id}`)
}