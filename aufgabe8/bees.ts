//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 18.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L8_Inheritance {
    export class NormalBees extends Bienen {
        
        constructor(_x: number, _y: number, _color: string, _colorFluegel: string, _richtung: number) {
            super(_x, _y, _color, _colorFluegel, _richtung);
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.colorFluegel = _colorFluegel;
            this.richtung = _richtung;
            this.speed = 0.1;
        }
                     
        draw(): void {
            //Flügel
            crc2.beginPath();
            crc2.fillStyle = this.colorFluegel;
            crc2.arc(this.x + 1, this.y - 8, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = this.colorFluegel; // "#B9FFFF"
            crc2.arc(this.x + 9, this.y + 3, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Stachel
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x - 2, this.y + 2);
            crc2.lineTo(this.x, this.y - 1);
            crc2.lineTo(this.x + 1, this.y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //Körper
            //gelb
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 2, this.y + 1);
            crc2.lineTo(this.x, this.y - 2);
            crc2.lineTo(this.x + 1, this.y - 3);
            crc2.lineTo(this.x + 3, this.y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //schwarz
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 2, this.y - 4);
            crc2.lineTo(this.x + 5, this.y + 1);
            crc2.closePath();
            crc2.stroke();
            //gelb
            crc2.beginPath();
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 3, this.y - 5);
            crc2.lineTo(this.x + 6, this.y + 1);
            crc2.closePath();
            crc2.stroke();
            //schwarz
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 4, this.y - 6);
            crc2.lineTo(this.x + 7, this.y);
            crc2.closePath();
            crc2.stroke();
            //gelb
            crc2.beginPath();
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 5, this.y - 7);
            crc2.lineTo(this.x + 8, this.y - 1);
            crc2.closePath();
            crc2.stroke();

            //Kopf
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 10, this.y - 6, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Fühler
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 10, this.y - 6);
            crc2.lineTo(this.x + 9, this.y - 15);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 13, this.y - 6);
            crc2.lineTo(this.x + 18, this.y - 5);
            crc2.closePath();
            crc2.stroke();
        }
    }
}