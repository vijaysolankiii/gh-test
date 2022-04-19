const API_URL = "https://indiadigicard.com/laravel/api";

const API_USERNAME = "apitest@gmail.com";
const API_PASSWORD = "this.admin";

var API_TOKEN = "";




const getUserToken = () => {
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
  };

  fetch(`${API_URL}/gettoken`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", result.token);
      API_TOKEN = result.token
    })
    .catch((error) => console.log("error", error));

    API_TOKEN = localStorage.getItem("token");
    if (API_TOKEN === "" || API_TOKEN == null) {
      getUserToken();
      localStorage.getItem("token");
    }
};


export { API_URL, API_USERNAME, API_PASSWORD, API_TOKEN };
