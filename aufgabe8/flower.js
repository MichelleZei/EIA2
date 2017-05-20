//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 18.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    class Flower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setRandomPosition() {
            this.x = (Math.random() * (L8_Inheritance.canvas.width - 110) + 110);
            this.y = (Math.random() * (L8_Inheritance.canvas.height - 170) + 150);
        }
        draw() {
            //nix
        }
    }
    L8_Inheritance.Flower = Flower;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=flower.js.map