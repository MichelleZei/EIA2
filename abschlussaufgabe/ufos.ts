//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 12.07.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace abschlussaufgabe {
    export class Ufos {
        x: number;
        y: number;
        color: string;
        colorbody: string;
        colorAlien: string;
        status: boolean = false; //nicht getroffen
        speed: number;
        h: number;
        
        constructor(_color: string, _colorbody: string, _colorAlien: string) {
            this.speed = 1;
            this.color = _color;
            this.colorbody = _colorbody;
            this.colorAlien = _colorAlien;
            this.status = false;
        }
        update(): void {
            this.move();
            this.draw();
        }
        
        fall(): void {
            //nix
        }
        
        move(): void {
            //nix
        }
        
        draw(): void {
            //nix
        }
    }
}