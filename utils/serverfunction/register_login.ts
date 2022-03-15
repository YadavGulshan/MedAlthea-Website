import { log } from 'util'
import { serverUrl } from './server'

export const registerUser = async (userDetails: any) => {
  try {
    const response = await window.fetch(serverUrl + `/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
    return response
  } catch (error) {
    console.log(error)
  }
}
