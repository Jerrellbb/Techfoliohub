import axios from "axios"
//fetch userteam from database

export async function getAllProjects(){
  const res = await axios.get(`/api/projects/`)
  return res.data
}

export async function getSingleProject(id){
  const res = await axios.get(`/api/projects/${id}`)
  return res.data
}


export async function getProfile(id){
  const res = await axios.get(`/api/auth/${id}`)
  return res.data
}

export async function getAllProfiles(){
  const res = await axios.get('/api/auth/users')
  console.log(res)
  return res.data
}