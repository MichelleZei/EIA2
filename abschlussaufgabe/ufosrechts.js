//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 12.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class UfosRechts extends abschlussaufgabe.Ufos {
        constructor(_x, _y, _color, _colorbody, _status) {
            super(_color, _colorbody);
            this.x = 600;
            this.y = Math.random() * 600;
        }
        move() {
            this.x -= 5 * this.speed;
        }
        fall() {
            this.y += 1;
        }
        draw() {
            //K�rper
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.fillStyle = this.colorbody;
            abschlussaufgabe.crc2.arc(this.x, this.y, 60, 0, Math.PI);
            abschlussaufgabe.crc2.closePath();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.fill();
            //Glasgeh�use 
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.strokeStyle = this.color;
            abschlussaufgabe.crc2.fillStyle = this.color;
            abschlussaufgabe.crc2.arc(this.x, this.y, 35, 1 * Math.PI, 0);
            abschlussaufgabe.crc2.closePath();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.fill();
            //Fu� rechts
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.strokeStyle = this.colorbody;
            abschlussaufgabe.crc2.fillStyle = this.colorbody;
            abschlussaufgabe.crc2.moveTo(this.x, this.y);
            abschlussaufgabe.crc2.lineTo(this.x + 50, this.y + 70);
            abschlussaufgabe.crc2.closePath();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.fill();
            //Fu� links
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.strokeStyle = this.colorbody;
            abschlussaufgabe.crc2.fillStyle = this.colorbody;
            abschlussaufgabe.crc2.moveTo(this.x, this.y);
            abschlussaufgabe.crc2.lineTo(this.x - 50, this.y + 70);
            abschlussaufgabe.crc2.closePath();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.fill();
        }
    }
    abschlussaufgabe.UfosRechts = UfosRechts;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=ufosrechts.js.map