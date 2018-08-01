import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getArticles: function() {
    return axios.get("https://api.meetup.com/gdimpls/events?&sign=true&photo-host=public&page=20");
  }
};
