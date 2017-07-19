//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 12.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class Ufos {
        constructor(_color, _colorbody) {
            this.speed = 2;
            this.color = _color;
            this.colorbody = _colorbody;
        }
        fall() {
            this.y += 10;
        }
        move() {
            //nix
        }
        draw() {
            //nix
        }
    }
    abschlussaufgabe.Ufos = Ufos;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=ufos.js.map