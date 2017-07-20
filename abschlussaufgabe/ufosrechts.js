//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 12.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class UfosRechts extends abschlussaufgabe.Ufos {
        constructor(_x, _y, _color, _colorbody, _colorAlien, _status) {
            super(_color, _colorbody, _colorAlien);
            this.x = 600;
            this.y = Math.random() * 500;
        }
        move() {
            if (this.status == false) {
                this.x -= 5 * this.speed;
            }
            else {
                this.fall();
            }
        }
        fall() {
            this.y += 20;
        }
        draw() {
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
            //Alien Kopf
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.strokeStyle = this.colorAlien;
            abschlussaufgabe.crc2.fillStyle = this.colorAlien;
            abschlussaufgabe.crc2.arc(this.x, this.y - 10, 15, 1 * Math.PI, 0);
            abschlussaufgabe.crc2.closePath();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.fill();
            //Alien K�rper
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.fillStyle = this.colorAlien;
            abschlussaufgabe.crc2.fillRect(this.x - 15, this.y - 10, 30, 30);
            abschlussaufgabe.crc2.closePath();
            //Ufo K�rper
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.strokeStyle = this.colorbody;
            abschlussaufgabe.crc2.fillStyle = this.colorbody;
            abschlussaufgabe.crc2.arc(this.x, this.y, 60, 0, Math.PI);
            abschlussaufgabe.crc2.closePath();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.fill();
            if (this.status == false) {
                //Alien Augen nicht abgeschossen
                abschlussaufgabe.crc2.beginPath();
                abschlussaufgabe.crc2.strokeStyle = "black";
                abschlussaufgabe.crc2.fillStyle = "black";
                abschlussaufgabe.crc2.arc(this.x - 3, this.y - 15, 2, 2 * Math.PI, 0);
                abschlussaufgabe.crc2.closePath();
                abschlussaufgabe.crc2.stroke();
                abschlussaufgabe.crc2.fill();
                abschlussaufgabe.crc2.beginPath();
                abschlussaufgabe.crc2.strokeStyle = "black";
                abschlussaufgabe.crc2.fillStyle = "black";
                abschlussaufgabe.crc2.arc(this.x + 3, this.y - 15, 2, 2 * Math.PI, 0);
                abschlussaufgabe.crc2.closePath();
                abschlussaufgabe.crc2.stroke();
                abschlussaufgabe.crc2.fill();
            }
            else {
                //Alien Augen abgeschossen
                abschlussaufgabe.crc2.beginPath();
                abschlussaufgabe.crc2.strokeStyle = "black";
                abschlussaufgabe.crc2.fillStyle = "black";
                abschlussaufgabe.crc2.rect(this.x - 10, this.y - 10, 8, 2);
                abschlussaufgabe.crc2.closePath();
                abschlussaufgabe.crc2.stroke();
                abschlussaufgabe.crc2.fill();
                abschlussaufgabe.crc2.beginPath();
                abschlussaufgabe.crc2.strokeStyle = "black";
                abschlussaufgabe.crc2.fillStyle = "black";
                abschlussaufgabe.crc2.rect(this.x - 7, this.y - 13, 2, 8);
                abschlussaufgabe.crc2.closePath();
                abschlussaufgabe.crc2.stroke();
                abschlussaufgabe.crc2.fill();
                abschlussaufgabe.crc2.beginPath();
                abschlussaufgabe.crc2.strokeStyle = "black";
                abschlussaufgabe.crc2.fillStyle = "black";
                abschlussaufgabe.crc2.rect(this.x + 4, this.y - 10, 8, 2);
                abschlussaufgabe.crc2.closePath();
                abschlussaufgabe.crc2.stroke();
                abschlussaufgabe.crc2.fill();
                abschlussaufgabe.crc2.beginPath();
                abschlussaufgabe.crc2.strokeStyle = "black";
                abschlussaufgabe.crc2.fillStyle = "black";
                abschlussaufgabe.crc2.rect(this.x + 7, this.y - 13, 2, 8);
                abschlussaufgabe.crc2.closePath();
                abschlussaufgabe.crc2.stroke();
                abschlussaufgabe.crc2.fill();
            }
        }
    }
    abschlussaufgabe.UfosRechts = UfosRechts;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=ufosrechts.js.map