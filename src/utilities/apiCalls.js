import axios from "axios";

export default {
  //You want to get all users
  getUsers: function() {
    //setup the simple one lines axios call
    //we are asking axios RETURN to a GET call from => https://randomuser.me/api/ => and provide results of 200 people in the US

    return axios.get("https://randomuser.me/api");

    //you do not need a promise after this line of code
  }
};
