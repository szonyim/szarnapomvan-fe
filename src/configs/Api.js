const baseUrl = process.env.NODE_ENV === 'development' ? 
  'https://localhost:7175' : 
  `${window.location.protocol}//${window.location.host}`;

console.log('ENV: ', process.env.NODE_ENV)

export default {
  baseUrl,
  get: (path) => baseUrl + path
}

