//Aufgabe: Uebung - Ufos fliegen lassen
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 30.6.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var uebung;
(function (uebung) {
    class RoteUfos extends uebung.Ufos {
        constructor() {
            super();
            this.colorbody = "#DF0101";
        }
        draw() {
            //K�rper
            uebung.crc2.beginPath();
            uebung.crc2.fillStyle = this.colorbody;
            uebung.crc2.arc(this.x, this.y, 60, 0, Math.PI);
            uebung.crc2.closePath();
            uebung.crc2.stroke();
            uebung.crc2.fill();
            //Glasgeh�use 
            uebung.crc2.beginPath();
            uebung.crc2.strokeStyle = "#81F7F3";
            uebung.crc2.fillStyle = "#81F7F3";
            uebung.crc2.arc(this.x, this.y, 35, 1 * Math.PI, 0);
            uebung.crc2.closePath();
            uebung.crc2.stroke();
            uebung.crc2.fill();
            //Fu� rechts
            uebung.crc2.beginPath();
            uebung.crc2.strokeStyle = this.colorbody;
            uebung.crc2.fillStyle = this.colorbody;
            uebung.crc2.moveTo(this.x, this.y);
            uebung.crc2.lineTo(this.x + 50, this.y + 70);
            uebung.crc2.closePath();
            uebung.crc2.stroke();
            uebung.crc2.fill();
            //Fu� links
            uebung.crc2.beginPath();
            uebung.crc2.strokeStyle = this.color;
            uebung.crc2.fillStyle = this.color;
            uebung.crc2.moveTo(this.x, this.y);
            uebung.crc2.lineTo(this.x - 50, this.y + 70);
            uebung.crc2.closePath();
            uebung.crc2.stroke();
            uebung.crc2.fill();
        }
    }
    uebung.RoteUfos = RoteUfos;
})(uebung || (uebung = {}));
//# sourceMappingURL=roteUfos.js.map