//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 18.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    class Bienen {
        constructor() {
            this.x = 25;
            this.y = 210;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorFluegel = "#B9FFFF";
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            // nix
        }
        draw() {
            //nix
        }
    }
    L8_Inheritance.Bienen = Bienen;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=bee.js.map