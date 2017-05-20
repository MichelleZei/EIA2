//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 18.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L8_Inheritance {
    export class Flower3 extends Flower {
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            // Stängel
            crc2.beginPath();
            crc2.strokeStyle = "#005B14";
            crc2.fillStyle = "#005B14";
            crc2.moveTo(this.x, this.y + 22);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            // Blüte
            crc2.beginPath();
            crc2.strokeStyle = "#7C0071";
            crc2.fillStyle = "#7C0071";
            crc2.arc(this.x, this.y - 3, 8, 0 * Math.PI, 1 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(this.x - 8, this.y - 2);
            crc2.lineTo(this.x - 8, this.y - 10);
            crc2.lineTo(this.x - 3, this.y - 2);
            crc2.lineTo(this.x, this.y - 10);
            crc2.lineTo(this.x + 3, this.y - 2);
            crc2.lineTo(this.x + 8, this.y - 10);
            crc2.lineTo(this.x + 8, this.y - 2);
            crc2.stroke();
            crc2.fill();
        }
    }
}