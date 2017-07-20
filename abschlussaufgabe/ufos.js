//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 12.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class Ufos {
        constructor(_color, _colorbody, _colorAlien) {
            this.status = false; //nicht getroffen
            this.speed = 1;
            this.color = _color;
            this.colorbody = _colorbody;
            this.colorAlien = _colorAlien;
            this.status = false;
        }
        update() {
            this.move();
            this.draw();
        }
        fall() {
            //nix
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