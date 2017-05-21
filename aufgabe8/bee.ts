//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 18.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L8_Inheritance {
    export class Bienen {
        x: number;
        y: number;
        color: string;
        colorFluegel: string;
        
        constructor() {
            this.x = 25;
            this.y = 210;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorFluegel = "#B9FFFF";
        }
        
        update(): void {
            this.move();
            this.draw();
        }
        
        move(): void {
            // nix
        }
        
        draw(): void {
            //nix
        }
    }
}
