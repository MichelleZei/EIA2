//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 12.07.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace abschlussaufgabe {
    export class Ufos {
        x: number;
        y: number;
        color: string;
        colorbody: string;
        speed: number;
        
        constructor(_color: string, _colorbody: string) {
            this.speed = 2;
            this.color = _color;
            this.colorbody = _colorbody;
        }
        
        fall(): void {
            this.y += 10;    
        }
        
        move(): void {
            //nix
        }
        
        draw(): void {
            //nix
        }
    }
}