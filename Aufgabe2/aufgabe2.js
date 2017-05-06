//Aufgabe: Aufgabe1 - Tracetable
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 28.3.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener("DOMContentLoaded", function () {
    let n = 64;
    let size = 120;
    let i = 0;
    let color;
    let zeile = 1;
    for (i = 0; i < n; i++) {
        if (zeile % 2 == 0) {
            if (i % 2 == 0) {
                color = "black";
            }
            else {
                color = "white";
            }
        }
        else {
            if (i % 2 == 0) {
                color = "white";
            }
            else {
                color = "black";
            }
        }
        let x = (i % 8) * size;
        let y = (zeile - 1) * size;
        placeDiv(x, y, size, color);
        if (x == (7 * size)) {
            zeile++;
        }
    }
    zahlDerKoerner();
    function placeDiv(_x, _y, _size, _color) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.position = "absolute";
        div.className += _color;
        div.className += " felder";
        s.display = "inline-block";
        s.width = size + "px";
        s.height = size + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
    function zahlDerKoerner() {
        var alphas;
        let feld = document.getElementsByClassName("felder");
        console.log(feld);
        let anzahlKoerner;
        for (let i = 0; i < feld.length; i++) {
            anzahlKoerner = Math.pow(2, i);
            if (i > 32) {
                var anzahlKoernerAsString = String(anzahlKoerner);
                anzahlKoernerAsString = anzahlKoerner.toExponential(6);
            }
            feld[i].textContent = anzahlKoerner.toString();
        }
    }
});
//# sourceMappingURL=aufgabe2.js.map