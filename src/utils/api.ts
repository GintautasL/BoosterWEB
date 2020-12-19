import config from '../config'

export function authHeader() {
  const token = localStorage.getItem('token')

  if (token) {
    return { Authorization: `Bearer ${token}` }
  } else {
    return {}
  }
}

export async function api(method, path, data = null, fileUpload = false) {
  const res = await fetch(`${config.apiUrl}/${path}`, {
    method,
    headers: {
      ...(!fileUpload && { 'Content-Type': 'application/json' }),
      ...authHeader(),
    },
    ...(data && { body: data && fileUpload ? data : JSON.stringify(data) }),
  })
  if (res.ok) {
    return res.json()
  } else {
    throw res.json()
  }
}
