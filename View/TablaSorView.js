class TablazatSorView {
    #adat = {};
    constructor(adat, szuloElem, index) {
        this.#adat = adat;
        this.tablaElem = szuloElem;

        this.#sor();
        this.index = index;
        this.sorElem = this.tablaElem.children("tr:last-child ")
        this.pipaElem = this.sorElem.children("td").children(".kesz")
        this.megseElem = this.sorElem.children("td").children(".megse").hide()
        this.torolElem = this.sorElem.children("td").children(".torol")
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.pipaElem.on("click", () => {
            console.log(this)
            this.sorElem.css("background-color", "lightgreen")
            this.pipaElem.hide()
            this.megseElem.show()

        });
        this.torolElem.on("click", () => {
            console.log(this)
            this.sorElem.remove()
            this.#esemenyTrigger("torol")
        });
        this.megseElem.on("click", () => {
            this.sorElem.css("background-color", "white")
            this.pipaElem.show()
            this.megseElem.hide()
        });

    }
    #sor() {
        let txt = "";

        txt += "<tr>";
        for (const key in this.#adat) {
            const element = this.#adat[key];
            txt += `<td>${element}</td>`;
        }
     
        txt += `<td>
            <span class = "kesz">✔</span>
            <span class = "megse"> ✘</span>
            <span class = "torol">🗑</span>
            </td>`
            txt += "</tr>"

        this.tablaElem.append(txt);
    }
      #esemenyTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev,{detail:this.index})
        window.dispatchEvent(esemenyem)
      } 
}
export default TablazatSorView;