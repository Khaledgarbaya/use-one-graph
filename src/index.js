import { useState } from "react"
import getAuth from "./util/auth"

export const useOneGraphAuth = (defaultService, appId) => {
  const [authenticated, setAuthenticated] = useState(false)
  const client = getAuth(appId)
  const login = async (service = defaultService) => {
    await client.login(service)
    const authenticated = await client.isLoggedIn(service)
    setAuthenticated(authenticated)
  }

  const logout = async (service = defaultService) => {
    await client.logout(service)

    setAuthenticated({
      authenticated: false,
    })
  }

  return { login, logout, authenticated, client }
}
