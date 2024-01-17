import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect,  } from 'react-router-dom'

export async function createProject(request){

  const data = await formToObj(request)
  return await axios.post('/api/projects/', data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    }
  })
}

export async function editProject(request, id){

  const data = await formToObj(request)
  return await axios.patch(`/api/projects/${id}/`, data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`

    }
  })
}

export async function deleteProject(id){

  await axios.delete(`/api/projects/${id}/`,{
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  
  return redirect(`/auth/${id}`)
}




export async function addComment(data) {
  const res = await axios.post(`/api/comments/`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  console.log(res)
  return res
}

export async function removeComment(commentId) {
  return await axios.delete(`/auth/comments/${commentId}`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}




// export async function addRemoveComment(data, id){
//   setTimeout(() => {
//     (console.log(data))
//   }, 5000);
//   if (data.value === "addComment")
//   return await axios.post(`/auth/comments/`, data,{
//     validateStatus : () => true,
//     headers: {
//       Authorization: `Bearer ${getToken()}`
//     }
  
//   })

//   else if (data.value === "removeComment")
//   return await axios.delete(`/auth/comments/${id}`,{
//     validateStatus : () => true,
//     headers: {
//       Authorization: `Bearer ${getToken()}`
//     }
//   })

// }

export async function addRemoveComment(data, id) {
  setTimeout(() => {
    console.log(data);
  }, 5000);

  try {
    if (data.value === "addComment") {
      const response = await axios.post(`/auth/comments/`, data, {
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      console.log("Response from addComment:", response.data);
      return response;
    } else if (data.value === "removeComment") {
      const response = await axios.delete(`/auth/comments/${id}`, {
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      console.log("Response from removeComment:", response.data);
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error; // rethrow the error to propagate it if needed
  }
}