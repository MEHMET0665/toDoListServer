// Information to reach API


// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  url='https://api.datamuse.com/words?rel_rhy='+inputField.value;

  const handleSuccess=response=>{
  if(response.ok){
    return response.json();
    }
    throw new Errol('Request failed')
  }
  const handleFailure=networkError=>{
  conssole.log(networkErrol.message)
  }
  const handleJsonResponse=jsonResponse=>{
  renderResponse(jsonResponse)
}
  fetch(url).then(handleSuccess,handleFailure).then(handleJsonResponse);
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
