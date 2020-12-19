export default {
  apiUrl: 'http://localhost:8080',
  apiMethods: {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
  },
  acceptedImageTypes: ['image/png', 'image/jpeg', 'image/jpg'],
  maxImageSize: 5000000,
  maxUploadImages: 5,
  roles: {
    ROLE_USER: {
      name: 'User',
      role: 'ROLE_USER',
    },
    ROLE_ADMIN: {
      name: 'Administrator',
      role: 'ROLE_ADMIN',
    },
  },
}
