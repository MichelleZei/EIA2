//Aufgabe: Aufgabe7 - Class Bienen
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 9.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    class Bienen {
        constructor(_x, _y, _color, _colorFluegel, _richtung) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.colorFluegel = _colorFluegel;
            this.richtung = _richtung;
        }
        setPosition() {
            this.x = 25;
            this.y = 210;
        }
        setStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorFluegel = "#B9FFFF";
        }
        move() {
            this.richtung = (Math.random() * 2);
        }
        animate() {
            this.x += Math.random() * 3 - 2 + this.richtung;
            this.y += Math.random() * 6 - 3;
            if (this.x < 0) {
                this.x = 300;
            }
            if (this.x > 300) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = 300;
            }
            if (this.y > 300) {
                this.y = 0;
            }
        }
        drawBee() {
            //Fl�gel
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.colorFluegel;
            L7_Classes.crc2.arc(this.x + 1, this.y - 8, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.colorFluegel; // "#B9FFFF"
            L7_Classes.crc2.arc(this.x + 9, this.y + 3, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Stachel
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#000000";
            L7_Classes.crc2.strokeStyle = "#000000";
            L7_Classes.crc2.moveTo(this.x - 2, this.y + 2);
            L7_Classes.crc2.lineTo(this.x, this.y - 1);
            L7_Classes.crc2.lineTo(this.x + 1, this.y + 1);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            //K�rper
            //gelb
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.color;
            L7_Classes.crc2.strokeStyle = this.color;
            L7_Classes.crc2.moveTo(this.x + 2, this.y + 1);
            L7_Classes.crc2.lineTo(this.x, this.y - 2);
            L7_Classes.crc2.lineTo(this.x + 1, this.y - 3);
            L7_Classes.crc2.lineTo(this.x + 3, this.y + 1);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            //schwarz
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#000000";
            L7_Classes.crc2.moveTo(this.x + 2, this.y - 4);
            L7_Classes.crc2.lineTo(this.x + 5, this.y + 1);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            //gelb
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = this.color;
            L7_Classes.crc2.moveTo(this.x + 3, this.y - 5);
            L7_Classes.crc2.lineTo(this.x + 6, this.y + 1);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            //schwarz
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#000000";
            L7_Classes.crc2.moveTo(this.x + 4, this.y - 6);
            L7_Classes.crc2.lineTo(this.x + 7, this.y);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            //gelb
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = this.color;
            L7_Classes.crc2.moveTo(this.x + 5, this.y - 7);
            L7_Classes.crc2.lineTo(this.x + 8, this.y - 1);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            //Kopf
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#000000";
            L7_Classes.crc2.arc(this.x + 10, this.y - 6, 3, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //F�hler
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#000000";
            L7_Classes.crc2.moveTo(this.x + 10, this.y - 6);
            L7_Classes.crc2.lineTo(this.x + 9, this.y - 15);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#000000";
            L7_Classes.crc2.moveTo(this.x + 13, this.y - 6);
            L7_Classes.crc2.lineTo(this.x + 18, this.y - 5);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
        }
    }
    L7_Classes.Bienen = Bienen;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=aufgabe7classBee.js.map