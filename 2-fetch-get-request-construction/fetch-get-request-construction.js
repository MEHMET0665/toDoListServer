const handleSuccess=response=>{
  if(response.ok){
    return response.json();
    }
    throw new Error('Request failed')
}
const handleFailure=networkErrol=>{
  conssole.log(networkError.message)
}
const handleJsonResponse=jsonResponse=>{
  console.log(jsonResponse)
}
fetch('http://api.datamuse.com/words?rel_rhy=forgetful').then(handleSuccess,handleFailure).then(handleJsonResponse);