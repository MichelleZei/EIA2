//Aufgabe: Aufgabe1 - Tracetable
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 9.4.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
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
        let feld = document.getElementsByClassName("felder");
        let AnzahlKoerner;
        for (let i = 0; i < feld.length; i++) {
            AnzahlKoerner = Math.pow(2, i);
            if (i > 32) {
                AnzahlKoerner = AnzahlKoerner.toExponential(6);
            }
            feld[i].textContent = AnzahlKoerner.toString();
        }
    }
    Markierung();
    let selected;
    function Markierung() {
        if (i < 7) {
            let divs = document.getElementsByTagName("div");
            for (let i = 0; i < divs.length; i++) {
                divs[i].addEventListener("click", select);
            }
        }
        document.addEventListener("click", markierungAn); //das angeklickte K�stchen wird gr�n gef�rbt
        document.addEventListener("click", markierungAus); //das gr�ne K�stchen wird wieder wei� bzw schwarz
    }
    function select(event) {
        selected = event.target;
    }
    function markierungAn(event) {
        let style = selected.style;
        style.backgroundColor = "green";
    }
    function markierungAus(event) {
        let style = selected.style;
        style.display += "none";
    }
    document.addEventListener("mousemove", function (Event) {
        document.getElementById("summe").style.left = (Event.clientX + 10) + "px";
        document.getElementById("summe").style.top = (Event.clientY + 10) + "px";
    });
});
//# sourceMappingURL=aufgabe3a.js.map