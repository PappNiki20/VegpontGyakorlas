import TablazatSorView from "./TablaSorView.js";
class View{
    #lista = [];
    #leiro;
    constructor(lista, szuloElem, leiro) {
      this.#lista = lista;
      this.#leiro = leiro;
      console.log(leiro)
      
      szuloElem.append(' <table class="table table-dark table-striped">');
      this.tablaElem = szuloElem.children("table");
  
      this.megjelenit();
    }
    megjelenit() {
     
       
      this.fejlec()
      this.tablaElem.append(`<tbody>`);
      this.#lista.forEach((elem, index) => {
        new TablazatSorView(elem, this.tablaElem, index);
      });
      

    }
    fejlec() {
      let txt = " <thead>";
      txt += "<tr>"
      for (const key in this.#leiro) {
        console.log(key)
        txt += `<th>${this.#leiro[key].megj}</th>`;
      }
     
      txt += `<th>Állapot</th></tr>`;
      txt += `</thead>`
  


      this.tablaElem.append(txt);
    }
}
export default View