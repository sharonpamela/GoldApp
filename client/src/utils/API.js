import axios from "axios";

export default {
  // Gets all books
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Saves a book to the database
  saveUser: function (userData) {
    console.log("creating post for user's new favorites...")
    console.log("THIS IS THE USER'S DATA", userData)
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
    console.log("hit buy button inside API")
    return axios.post("/api/buy", userData)
  },

  sellButton: function(userData){
    console.log("sell button hit at API.js")
    return axios.post("/api/sell", userData)
  }
};