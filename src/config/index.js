const URL_BACKEND_DB = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://mnaulaflix.herokuapp.com';

export default {
  URL_BACKEND_DB,
};
