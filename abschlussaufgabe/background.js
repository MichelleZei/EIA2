//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 12.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class Background {
        constructor(_x, _y, _fillColor) {
            this.x = 0;
            this.y = 0;
            this.fillColor = "#070719";
        }
        draw() {
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.fillStyle = this.fillColor;
            abschlussaufgabe.crc2.fillRect(this.x, this.y, 600, 600);
            abschlussaufgabe.crc2.closePath();
        }
    }
    abschlussaufgabe.Background = Background;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=background.js.map