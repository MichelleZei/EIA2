//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 18.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    class HoneyBees extends L8_Inheritance.Bienen {
        constructor(_x, _y, _color, _colorFluegel, _richtung) {
            super(_x, _y, _color, _colorFluegel, _richtung);
        }
        draw() {
            //Fl�gel
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.colorFluegel;
            L8_Inheritance.crc2.arc(this.x + 1, this.y - 8, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.colorFluegel; // "#B9FFFF"
            L8_Inheritance.crc2.arc(this.x + 9, this.y + 3, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //Stachel
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.strokeStyle = "#000000";
            L8_Inheritance.crc2.moveTo(this.x - 2, this.y + 2);
            L8_Inheritance.crc2.lineTo(this.x, this.y - 1);
            L8_Inheritance.crc2.lineTo(this.x + 1, this.y + 1);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            //K�rper
            //gelb
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "f8f800";
            L8_Inheritance.crc2.strokeStyle = "f8f800";
            L8_Inheritance.crc2.moveTo(this.x + 2, this.y + 1);
            L8_Inheritance.crc2.lineTo(this.x, this.y - 2);
            L8_Inheritance.crc2.lineTo(this.x + 1, this.y - 3);
            L8_Inheritance.crc2.lineTo(this.x + 3, this.y + 1);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            //schwarz
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "#000000";
            L8_Inheritance.crc2.moveTo(this.x + 2, this.y - 4);
            L8_Inheritance.crc2.lineTo(this.x + 5, this.y + 1);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            //gelb
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "f8f800";
            L8_Inheritance.crc2.moveTo(this.x + 3, this.y - 5);
            L8_Inheritance.crc2.lineTo(this.x + 6, this.y + 1);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            //schwarz
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "#000000";
            L8_Inheritance.crc2.moveTo(this.x + 4, this.y - 6);
            L8_Inheritance.crc2.lineTo(this.x + 7, this.y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            //gelb
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "f8f800";
            L8_Inheritance.crc2.moveTo(this.x + 5, this.y - 7);
            L8_Inheritance.crc2.lineTo(this.x + 8, this.y - 1);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            //Kopf
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.arc(this.x + 10, this.y - 6, 3, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //F�hler
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "#000000";
            L8_Inheritance.crc2.moveTo(this.x + 10, this.y - 6);
            L8_Inheritance.crc2.lineTo(this.x + 9, this.y - 15);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "#000000";
            L8_Inheritance.crc2.moveTo(this.x + 13, this.y - 6);
            L8_Inheritance.crc2.lineTo(this.x + 18, this.y - 5);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
        }
        move() {
            this.richtung = (Math.random() * 20);
        }
    }
    L8_Inheritance.HoneyBees = HoneyBees;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=beehoney.js.map