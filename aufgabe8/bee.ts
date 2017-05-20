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
        richtung: number;
        xTarget: number;
        yTarget: number;
        speed: number;
        
        constructor(_x: number, _y: number, _color: string, _colorFluegel: string, _richtung: number) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.colorFluegel = _colorFluegel;
            this.richtung = _richtung;
        }
        setPosition(): void {
            this.x = 25;
            this.y = 210;
        }
        setStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorFluegel = "#B9FFFF";
        }
        move(): void {
            this.richtung = (Math.random() * 2);
        }
        animate(): void {
            this.x += Math.random() * 3 - 2 + this.richtung;
            this.y += Math.random() * 6 - 3;
            if (this.x < 0) {
                this.x = 300;
            }
            if (this.x > 300) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = 300;
            }
            if (this.y > 300) {
                this.y = 0;
            }
        }

        draw(): void {
            //nix
        }
    }
}
