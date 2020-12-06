// Reconstruct the code step-by-step until you have written a complete POST request using fetch() and .then().
const url='https://api.something.com/endpoint'
const data={
  name:'Mehmet'
  lastName:"Avci"
  email:'meavci@gmail.com'
}
const requestBody={
  method:"POST";
  body:JSON.stringify(data)
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
  console.log(jsonResponse)
}
fetch(url,requestBody).then(handleSuccess,handleFailure).then(handleJsonResponse);