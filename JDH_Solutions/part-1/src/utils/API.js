import axios from "axios";
const BASEURL = "https://sv-reqres.now.sh";
const LISTINGS = "/api/listings";
const EVENTS = "/api/events";
const OFFERS = "/api/offers";

const API = {
  listings: function () {
    console.log('getting listings')
    console.log(BASEURL + LISTINGS)
    return axios.get(BASEURL + LISTINGS);
  },
  events: function () {
    return axios.get(BASEURL + EVENTS);
  },
  offers: function () {
    return axios.get(BASEURL + OFFERS);
  }
};

export default API;