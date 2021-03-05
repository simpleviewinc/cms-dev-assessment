import axios from "axios";
const BASEURL = "https://sv-reqres.now.sh";
const LISTINGS = "/api/listings";
const EVENTS = "/api/events";
const OFFERS = "/api/offers";

const API = {
  listings: function () {
    console.log('getting listings')
    return axios.get(BASEURL + LISTINGS);
  },
  events: function () {
    console.log('getting events')
    return axios.get(BASEURL + EVENTS);
  },
  offers: function () {
    console.log('getting offers')
    return axios.get(BASEURL + OFFERS);
  }
};

export default API;