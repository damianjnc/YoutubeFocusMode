import axios from "axios";

const KEY = "AIzaSyACKM-0jvPryg1UNnov6Udfv8J9Fs1j8Ng";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
