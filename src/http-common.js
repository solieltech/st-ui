import axios from "axios";


// http://localhost:8085/getChannelStats/
// https://st-service.herokuapp.com/
export default axios.create({
  baseURL: "https://st-service.herokuapp.com/getChannelStats/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});
