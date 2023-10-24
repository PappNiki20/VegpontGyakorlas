import { adatLeiro } from "./adatLeiro.js"
class Model{
    #leiro
    constructor(){
    this.#leiro = adatLeiro
    }
    
    get leiro(){
        return this.#leiro
    }
    }
    export default Model