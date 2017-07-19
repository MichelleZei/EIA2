//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 12.07.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace abschlussaufgabe {
    export class UfosRechts extends Ufos {
        x: number;
        y: number;
        color: string;
        colorbody: string;

        constructor(_x: number, _y: number, _color: string, _colorbody: string) {
            super(_color, _colorbody);
            this.x = 600;
            this.y = Math.random() * 600;
        }
        
        move(): void {
            this.x -= 5 * this.speed;
        }
        
        fall(): void {
            this.y += 10;    
        }
        
        draw(): void {
            //K�rper
            crc2.beginPath();
            crc2.fillStyle = this.colorbody;
            crc2.arc(this.x, this.y, 60, 0, Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Glasgeh�use 
            crc2.beginPath();
            crc2.strokeStyle = this.color;
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, 35, 1 * Math.PI, 0);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Fu� rechts
            crc2.beginPath();
            crc2.strokeStyle = this.colorbody;
            crc2.fillStyle = this.colorbody;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 50, this.y + 70);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Fu� links
            crc2.beginPath();
            crc2.strokeStyle = this.colorbody;
            crc2.fillStyle = this.colorbody;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 50, this.y + 70);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}