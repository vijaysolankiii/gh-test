
import { API_PASSWORD, API_URL, API_USERNAME } from "./config";

const apiToken = "";
const GetTokenDetail = () => {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("email", API_USERNAME);
  urlencoded.append("password", API_PASSWORD);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch(`${API_URL}/gettoken`, requestOptions)
    .then((response) => response.text())
    .then((result) => apiToken = apiToken + result)
    .catch((error) => console.log("error", error));
};



export  {GetTokenDetail,apiToken};
