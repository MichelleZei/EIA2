//Aufgabe: Uebung - Ufos fliegen lassen
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 30.6.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace uebung {
    export class Ufos {
        x: number;
        y: number;
        color: string;
        colorbody: string;
        
        constructor() {
            this.x = 300;
            this.y = 300;
            this.color = "#81F7F3";
            this.colorbody = "#74DF00";
        }
        
        draw(): void {
            //nix
        }
    }
}