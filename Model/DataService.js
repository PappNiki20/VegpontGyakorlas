class Dataservice{
constructor(){

}
getData(apiVegpont, callback, hibaCallback, leiro){
    axios.get(apiVegpont)
    .then(function (response) {
      // handle success
    /*console.log("Válasz az objektumra",response);
    console.log("adatok",response.data.nevek);
    console.log("státusz",response.status);
    console.log("státusz szöveg",response.statusText);
    console.log("válasz fejléc",response.headers);
    console.log("válasz config",response.config);*/
    callback(response.data.nevek, leiro)
    })
    .catch(function (error) {
      // handle error
      hibaCallback(error)
    })
    .finally(function () {
    
    });
}

}
export default Dataservice