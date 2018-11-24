import axios from axios;

export default {
  // Gets all user
  getUser: function () {
    return axios.get("/api/user")
  },
  postUser: function () {
    return axios.post("/api/user", User)
  }
}
