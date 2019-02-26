import axios from 'axios';

const KEY = 'AIzaSyDAsh2-7liogZL2alKIx63SsfJP86QuJxM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
});