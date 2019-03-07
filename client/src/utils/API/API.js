import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getArticles: function() {
    return axios.get("https://api.meetup.com/gdimpls/events?&sign=true&photo-host=public&page=20");
  },
  getQuotes: function() {
    return axios.get("/api/quotes");
  },
  // Gets the quote with the given id
  getQuote: function(id) {
    return axios.get("/api/quotes/" + id);
  },
  // Deletes the quote with the given id
  deleteQuote: function(id) {
    return axios.delete("/api/quotes/" + id);
  },
  // Saves a quote to the database
  saveQuote: function(quoteData) {
    return axios.post("/api/quotes", quoteData);
  }
};
