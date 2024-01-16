import { formToObj, getToken, getUserId } from "../helpers/common"
import axios from 'axios'

export async function editProfile(request, id){
id = getUserId()
  const data = await formToObj(request)
  return await axios.patch(`/api/auth/${id}/`, data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`

    }
  })
}
