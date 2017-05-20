//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 18.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    class Flower1 extends L8_Inheritance.Flower {
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
            L8_Inheritance.crc2.moveTo(this.x, this.y + 22);
            L8_Inheritance.crc2.lineTo(this.x, this.y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.fill();
            // Bl�te
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "white";
            L8_Inheritance.crc2.fillStyle = "white";
            L8_Inheritance.crc2.moveTo(this.x + 1, this.y + 5);
            L8_Inheritance.crc2.lineTo(this.x + 15, this.y + 17);
            L8_Inheritance.crc2.lineTo(this.x + 5, this.y + 2);
            L8_Inheritance.crc2.lineTo(this.x + 23, this.y - 1);
            L8_Inheritance.crc2.lineTo(this.x + 5, this.y - 3);
            L8_Inheritance.crc2.lineTo(this.x + 18, this.y - 18);
            L8_Inheritance.crc2.lineTo(this.x + 2, this.y - 5);
            L8_Inheritance.crc2.lineTo(this.x + 1, this.y - 23);
            L8_Inheritance.crc2.lineTo(this.x - 1, this.y - 5);
            L8_Inheritance.crc2.lineTo(this.x - 17, this.y - 18);
            L8_Inheritance.crc2.lineTo(this.x - 4, this.y - 3);
            L8_Inheritance.crc2.lineTo(this.x - 22, this.y - 1);
            L8_Inheritance.crc2.lineTo(this.x - 4, this.y + 2);
            L8_Inheritance.crc2.lineTo(this.x - 14, this.y + 17);
            L8_Inheritance.crc2.lineTo(this.x - 1, this.y + 5);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.fill();
            // Kreis in der Mitte
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#FF8C00";
            L8_Inheritance.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        }
    }
    L8_Inheritance.Flower1 = Flower1;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=flower1.js.map