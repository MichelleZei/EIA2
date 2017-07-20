//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 12.07.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace abschlussaufgabe {
    export class UfosLinks extends Ufos {
        x: number;
        y: number;
        color: string;
        colorbody: string;
        colorAlien: string;

        constructor(_x: number, _y: number, _color: string, _colorbody: string, _colorAlien: string, _status: boolean) {
            super(_color, _colorbody, _colorAlien);
            this.colorbody = _colorbody;
            this.x = 0;
            this.y = Math.random() * 500;
        }

        move(): void {
            if (this.status == false) {
                this.x += 2 * this.speed;
            }
            else {
                this.fall();
            }
        }

        fall(): void {
            this.y += 15;
        }

        draw(): void {
            //Glasgehäuse 
            crc2.beginPath();
            crc2.strokeStyle = this.color;
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, 35, 1 * Math.PI, 0);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Fuß rechts
            crc2.beginPath();
            crc2.strokeStyle = this.colorbody;
            crc2.fillStyle = this.colorbody;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 50, this.y + 70);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Fuß links
            crc2.beginPath();
            crc2.strokeStyle = this.colorbody;
            crc2.fillStyle = this.colorbody;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 50, this.y + 70);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Alien Kopf
            crc2.beginPath();
            crc2.strokeStyle = this.colorAlien;
            crc2.fillStyle = this.colorAlien;
            crc2.arc(this.x, this.y - 10, 15, 1 * Math.PI, 0);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Alien Körper
            crc2.beginPath();
            crc2.fillStyle = this.colorAlien;
            crc2.fillRect(this.x - 15, this.y - 10, 30, 30);
            crc2.closePath();
            //Ufo Körper
            crc2.beginPath();
            crc2.strokeStyle = this.colorbody;
            crc2.fillStyle = this.colorbody;
            crc2.arc(this.x, this.y, 60, 0, Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            if (this.status == false) {
                //Alien Augen nicht abgeschossen
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.arc(this.x - 3, this.y - 15, 2, 2 * Math.PI, 0);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.arc(this.x + 3, this.y - 15, 2, 2 * Math.PI, 0);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
            else {
                //Alien Augen abgeschossen
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.rect(this.x - 10, this.y - 10, 8, 2);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.rect(this.x - 7, this.y - 13, 2, 8);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.rect(this.x + 4, this.y - 10, 8, 2);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.rect(this.x + 7, this.y - 13, 2, 8);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
        }
    }
}