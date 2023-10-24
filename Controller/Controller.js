import Model from "../Model/Model.js"
import View from "../View/View.js"
import Dataservice from "../Model/DataService.js"
import HibaView from "../View/HibaView.js"
import UrlapView from "../View/urlap/UrlapView.js"

class Controller{
constructor(){
   
    console.log("Constr")
    this.dataService = new Dataservice()
    this.adatLeiro =  new Model()
    this.dataService.getData("../adatok.json", this.adatMegj, this.hibaMegj, this.adatLeiro.leiro)
   
    this.view = new UrlapView($(".urlap"), this.adatLeiro.leiro);
    
    $(window).on("valid", () => {
        console.log(event.detail)
    })

}
adatMegj(lista, leiro){
    console.log(leiro)
    new View(lista, $(".lista"), leiro)
}
hibaMegj(error){
    console.log(error)
    new HibaView(error, $(".lista"))
}
}
export default Controller