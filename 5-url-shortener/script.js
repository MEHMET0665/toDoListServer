// Information to reach API
const apiKey = '75562a6d15d743bcb82f2af02ac1016e';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const url='https://api.rebrandly.com/v1/links'
const requestHeaders={
 destination:"https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g",
}

let requestHeaders = {
  "Content-Type": "application/json",
  apikey: "75562a6d15d743bcb82f2af02ac1016e",
  
}
 const data = {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: requestHeaders
  }

const handleSuccess=response=>{
  if(response.ok){
    return response.json();
    }
    throw new Errol('Request failed')
}
const handleFailure=networkErrol=>{
  conssole.log(networkErrol.message)
}
const handleJsonResponse=jsonResponse=>{
  renderResponse(jsonResponse)
}
fetch(url,data).then(handleSuccess,handleFailure).then(handleJsonResponse);
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);