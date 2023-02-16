const baseUrl = 'https://localhost:7175'

export default {
  baseUrl,
  get: (path) => baseUrl + path
}