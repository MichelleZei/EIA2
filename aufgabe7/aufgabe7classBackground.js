//Aufgabe: Aufgabe7 - Class Blumenwiese
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 13.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    class Background {
        constructor(_x, _y, _fillColor) {
            this.x = _x;
            this.y = _y;
            this.fillColor = _fillColor;
        }
        drawBackground() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.fillColor;
            L7_Classes.crc2.fillRect(this.x, this.y, 300, 170);
            L7_Classes.crc2.moveTo(0, 0);
            L7_Classes.crc2.lineTo(this.x, this.y);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
        }
        drawSun() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#ffff00";
            L7_Classes.crc2.arc(250, 30, 20, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
        drawWiese() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#228B22";
            L7_Classes.crc2.fillRect(0, 170, 300, 300);
            L7_Classes.crc2.moveTo(0, 0);
            L7_Classes.crc2.lineTo(0, 170);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
        }
        drawMountain1() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#888888";
            L7_Classes.crc2.strokeStyle = "#888888";
            L7_Classes.crc2.moveTo(80, 170);
            L7_Classes.crc2.lineTo(80 + 50, 170 - 80);
            L7_Classes.crc2.lineTo(80 + 100, 170);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        }
        drawMountain2() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#888888";
            L7_Classes.crc2.strokeStyle = "#888888";
            L7_Classes.crc2.moveTo(0, 170);
            L7_Classes.crc2.lineTo(0 + 60, 170 - 130);
            L7_Classes.crc2.lineTo(0 + 120, 170);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        }
        drawIce1() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#FFFFFF";
            L7_Classes.crc2.strokeStyle = "#FFFFFF";
            L7_Classes.crc2.moveTo(116, 112);
            L7_Classes.crc2.lineTo(116 + 14, 112 - 22);
            L7_Classes.crc2.lineTo(116 + 28, 112);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        }
        drawIce2() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#FFFFFF";
            L7_Classes.crc2.strokeStyle = "#FFFFFF";
            L7_Classes.crc2.moveTo(36, 92);
            L7_Classes.crc2.lineTo(36 + 24, 92 - 52);
            L7_Classes.crc2.lineTo(36 + 48, 92);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        }
        drawBienenkorb() {
            //oberer Teil
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#E8AE00";
            L7_Classes.crc2.arc(20, 190, 25, 0, Math.PI, true);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //unterer Teil
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#E8AE00";
            L7_Classes.crc2.fillRect(20 - 25, 190, 50, 30);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Bienenkorb �ffnung
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#201500";
            L7_Classes.crc2.fillStyle = "#201500";
            L7_Classes.crc2.arc(25, 210, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
        }
    }
    L7_Classes.Background = Background;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=aufgabe7classBackground.js.map