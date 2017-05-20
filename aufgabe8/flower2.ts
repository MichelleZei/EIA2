//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 18.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L8_Inheritance {
    export class Flower2 extends Flower {
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
            crc2.moveTo(this.x, this.y + 40);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = "#005B14";
            crc2.fillStyle = "#005B14";
            crc2.moveTo(this.x + 1, this.y + 40);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            // Blüte
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            // Kreis in der Mitte
            crc2.beginPath();
            crc2.fillStyle = "#7C0000";
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}