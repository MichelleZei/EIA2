//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 18.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    class Flower2 extends L8_Inheritance.Flower {
        constructor(_x, _y) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        draw() {
            // St�ngel
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "#005B14";
            L8_Inheritance.crc2.fillStyle = "#005B14";
            L8_Inheritance.crc2.moveTo(this.x, this.y + 40);
            L8_Inheritance.crc2.lineTo(this.x, this.y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "#005B14";
            L8_Inheritance.crc2.fillStyle = "#005B14";
            L8_Inheritance.crc2.moveTo(this.x + 1, this.y + 40);
            L8_Inheritance.crc2.lineTo(this.x, this.y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.fill();
            // Bl�te
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "red";
            L8_Inheritance.crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "red";
            L8_Inheritance.crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            // Kreis in der Mitte
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#7C0000";
            L8_Inheritance.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        }
    }
    L8_Inheritance.Flower2 = Flower2;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=flower2.js.map