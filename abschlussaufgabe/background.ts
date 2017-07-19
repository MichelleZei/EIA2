//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 12.07.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace abschlussaufgabe {
    export class Background {
        x: number;
        y: number;
        fillColor: string;

        constructor(_x: number, _y: number, _fillColor: string) {
            this.x = 0;
            this.y = 0;
            this.fillColor = "#070719";
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.fillRect(this.x, this.y, 600, 600);
            crc2.closePath();
        }
    }
}