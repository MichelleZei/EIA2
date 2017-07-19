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
        status: boolean = false; //nicht getroffen
        speed: number;
        
        constructor(_color: string, _colorbody: string) {
            this.speed = 1;
            this.color = _color;
            this.colorbody = _colorbody;
            this.status = false;
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