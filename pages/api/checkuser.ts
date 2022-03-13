import axios from 'axios'

export const checkuser = async (req: Request, res: Response) => {
  const request = req.body
  const serverUrl = `http://127.0.0.1:8000/api/register/search/?username=${request}`
  const response = axios.get(serverUrl)
  console.log(response)
  if ((await response).status === 200) {
    return true
  } else {
    return false
  }
}
