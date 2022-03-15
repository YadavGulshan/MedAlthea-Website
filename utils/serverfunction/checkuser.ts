import { serverUrl } from './server'

export const checkUser = async (username: string) => {
  const response = window.fetch(
    serverUrl + `/register/search/?username=${username}`
  )
  if ((await response).status === 200) {
    return true
  } else {
    return false
  }
}
