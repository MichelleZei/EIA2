//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 18.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L8_Inheritance {
    export class Flower {
        x: number;
        y: number;
        fillColor: string;
        strokeColor: string;
        zufallszahlBlumen: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (canvas.width - 110) + 110);
            this.y = (Math.random() * (canvas.height - 170) + 150);
        }
  
        draw(): void {
            //nix
        }
    }
}
