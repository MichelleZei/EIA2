//Aufgabe: Aufgabe7 - Class Blumenwiese
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 9.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    class Flower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setRandomFlower() {
            this.x = (Math.random() * (L7_Classes.canvas.width - 110) + 110);
            this.y = (Math.random() * (L7_Classes.canvas.height - 170) + 150);
            this.zufallszahlBlumen = Math.floor((Math.random() * 4) + 0);
        }
        drawFlower1() {
            // St�ngel
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#005B14";
            L7_Classes.crc2.fillStyle = "#005B14";
            L7_Classes.crc2.moveTo(this.x, this.y + 22);
            L7_Classes.crc2.lineTo(this.x, this.y);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            // Bl�te
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "white";
            L7_Classes.crc2.fillStyle = "white";
            L7_Classes.crc2.moveTo(this.x + 1, this.y + 5);
            L7_Classes.crc2.lineTo(this.x + 15, this.y + 17);
            L7_Classes.crc2.lineTo(this.x + 5, this.y + 2);
            L7_Classes.crc2.lineTo(this.x + 23, this.y - 1);
            L7_Classes.crc2.lineTo(this.x + 5, this.y - 3);
            L7_Classes.crc2.lineTo(this.x + 18, this.y - 18);
            L7_Classes.crc2.lineTo(this.x + 2, this.y - 5);
            L7_Classes.crc2.lineTo(this.x + 1, this.y - 23);
            L7_Classes.crc2.lineTo(this.x - 1, this.y - 5);
            L7_Classes.crc2.lineTo(this.x - 17, this.y - 18);
            L7_Classes.crc2.lineTo(this.x - 4, this.y - 3);
            L7_Classes.crc2.lineTo(this.x - 22, this.y - 1);
            L7_Classes.crc2.lineTo(this.x - 4, this.y + 2);
            L7_Classes.crc2.lineTo(this.x - 14, this.y + 17);
            L7_Classes.crc2.lineTo(this.x - 1, this.y + 5);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            // Kreis in der Mitte
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#FF8C00";
            L7_Classes.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
        drawFlower2() {
            // St�ngel
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#005B14";
            L7_Classes.crc2.fillStyle = "#005B14";
            L7_Classes.crc2.moveTo(this.x, this.y + 40);
            L7_Classes.crc2.lineTo(this.x, this.y);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#005B14";
            L7_Classes.crc2.fillStyle = "#005B14";
            L7_Classes.crc2.moveTo(this.x + 1, this.y + 40);
            L7_Classes.crc2.lineTo(this.x, this.y);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            // Bl�te
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "red";
            L7_Classes.crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "red";
            L7_Classes.crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            // Kreis in der Mitte
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#7C0000";
            L7_Classes.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
        drawFlower3() {
            // St�ngel
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#005B14";
            L7_Classes.crc2.fillStyle = "#005B14";
            L7_Classes.crc2.moveTo(this.x, this.y + 22);
            L7_Classes.crc2.lineTo(this.x, this.y);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            // Bl�te
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#7C0071";
            L7_Classes.crc2.fillStyle = "#7C0071";
            L7_Classes.crc2.arc(this.x, this.y - 3, 8, 0 * Math.PI, 1 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.moveTo(this.x - 8, this.y - 2);
            L7_Classes.crc2.lineTo(this.x - 8, this.y - 10);
            L7_Classes.crc2.lineTo(this.x - 3, this.y - 2);
            L7_Classes.crc2.lineTo(this.x, this.y - 10);
            L7_Classes.crc2.lineTo(this.x + 3, this.y - 2);
            L7_Classes.crc2.lineTo(this.x + 8, this.y - 10);
            L7_Classes.crc2.lineTo(this.x + 8, this.y - 2);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
        }
    }
    L7_Classes.Flower = Flower;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=aufgabe7classFlower.js.map