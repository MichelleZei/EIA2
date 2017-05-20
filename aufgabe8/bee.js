//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 18.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
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
        draw() {
            //nix
        }
    }
    L8_Inheritance.Bienen = Bienen;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=bee.js.map