import axios from "axios";

export default {
  // Gets all books
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Saves a book to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },

  buyButton: function(userData){
    return axios.post("/api/buy", userData)
  },

  sellButton: function(userData){
    return axios.post("/api/sell", userData)
  }
};