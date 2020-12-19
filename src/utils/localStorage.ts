function formatExpireDate(date) {
  return Date.now() + date
}

export const setAuthTokens = data => {
  const hourInSec = 60 * 60
  localStorage.setItem('token', data.token)
  localStorage.setItem('refreshToken', data.refreshToken)
  localStorage.setItem(
    'tokenExpiry',
    formatExpireDate(formatExpireDate(hourInSec)),
  )
}

export const clearStorageData = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('tokenExpiry')
}

export const isUserActive = () => !!localStorage.getItem('token')
