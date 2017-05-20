//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 19.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    class Background {
        constructor(_x, _y, _fillColor) {
            this.x = _x;
            this.y = _y;
            this.fillColor = _fillColor;
        }
        drawBackground() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.fillColor;
            L8_Inheritance.crc2.fillRect(this.x, this.y, 300, 170);
            L8_Inheritance.crc2.moveTo(0, 0);
            L8_Inheritance.crc2.lineTo(this.x, this.y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
        }
        drawSun() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#ffff00";
            L8_Inheritance.crc2.arc(250, 30, 20, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        }
        drawWiese() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#228B22";
            L8_Inheritance.crc2.fillRect(0, 170, 300, 300);
            L8_Inheritance.crc2.moveTo(0, 0);
            L8_Inheritance.crc2.lineTo(0, 170);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
        }
        drawMountain1() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#888888";
            L8_Inheritance.crc2.strokeStyle = "#888888";
            L8_Inheritance.crc2.moveTo(80, 170);
            L8_Inheritance.crc2.lineTo(80 + 50, 170 - 80);
            L8_Inheritance.crc2.lineTo(80 + 100, 170);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
        drawMountain2() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#888888";
            L8_Inheritance.crc2.strokeStyle = "#888888";
            L8_Inheritance.crc2.moveTo(0, 170);
            L8_Inheritance.crc2.lineTo(0 + 60, 170 - 130);
            L8_Inheritance.crc2.lineTo(0 + 120, 170);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
        drawIce1() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#FFFFFF";
            L8_Inheritance.crc2.strokeStyle = "#FFFFFF";
            L8_Inheritance.crc2.moveTo(116, 112);
            L8_Inheritance.crc2.lineTo(116 + 14, 112 - 22);
            L8_Inheritance.crc2.lineTo(116 + 28, 112);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
        drawIce2() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#FFFFFF";
            L8_Inheritance.crc2.strokeStyle = "#FFFFFF";
            L8_Inheritance.crc2.moveTo(36, 92);
            L8_Inheritance.crc2.lineTo(36 + 24, 92 - 52);
            L8_Inheritance.crc2.lineTo(36 + 48, 92);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
        drawBienenkorb() {
            //oberer Teil
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#E8AE00";
            L8_Inheritance.crc2.arc(20, 190, 25, 0, Math.PI, true);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //unterer Teil
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#E8AE00";
            L8_Inheritance.crc2.fillRect(20 - 25, 190, 50, 30);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //Bienenkorb �ffnung
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "#201500";
            L8_Inheritance.crc2.fillStyle = "#201500";
            L8_Inheritance.crc2.arc(25, 210, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.fill();
        }
    }
    L8_Inheritance.Background = Background;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=background.js.map