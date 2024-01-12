import axios from "axios"
//fetch userteam from database

export async function getAllProjects(){
  const res = await axios.get(`/api/projects/`)
  return res.data
}