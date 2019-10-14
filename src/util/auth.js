import OneGraphAuth from "onegraph-auth"

let auth

export default appId => {
  if (!auth) {
    auth = new OneGraphAuth({
      appId,
    })
  }
  return auth
}
