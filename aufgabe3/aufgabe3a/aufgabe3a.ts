//Aufgabe: Aufgabe1 - Tracetable
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 9.4.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

document.addEventListener('DOMContentLoaded', function() {
    let n: number = 64;
    let size: number = 120;
    let i: number = 0;
    let color: string;
    let zeile: number = 1;

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
        let x: number = (i % 8) * size;
        let y: number = (zeile - 1) * size;
        placeDiv(x, y, size, color);
        if (x == (7 * size)) {
            zeile++;
        }
    }
    zahlDerKoerner();

    function placeDiv(_x: number, _y: number, _size: number, _color: string) {
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
        let AnzahlKoerner: any;
        for (let i = 0; i < feld.length; i++) {
            AnzahlKoerner = Math.pow(2, i);
            if (i > 32) {
                AnzahlKoerner = AnzahlKoerner.toExponential(6);
            }
            feld[i].textContent = AnzahlKoerner.toString();
        }
    }

    //Beginn Aufgabe 3a

    Markierung();

    let selected: HTMLDivElement;

    function Markierung(): void {
        if (i < 7) { //wenn die ersten 8 Divs angeklickt werden
            let divs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
            for (let i: number = 0; i < divs.length; i++) {
                divs[i].addEventListener("click", select);
            }
        }

        document.addEventListener("click", markierungAn);//das angeklickte Kästchen wird grün gefärbt
        document.addEventListener("click", markierungAus);//das grüne Kästchen wird wieder weiß bzw schwarz

    }

    function select(event: MouseEvent): void {
        selected = <HTMLDivElement>event.target;
    }

    function markierungAn(event: MouseEvent): void {
        let style: CSSStyleDeclaration = selected.style;
        style.backgroundColor = "green";
    }
    function markierungAus(event: MouseEvent): void {
        let style: CSSStyleDeclaration = selected.style;
        style.display += "none";
    }
    //Anzahl der Körner anzeigen
    document.addEventListener("mousemove", function(Event) {
        document.getElementById("summe").style.left = (Event.clientX + 10) + "px";
        document.getElementById("summe").style.top = (Event.clientY + 10) + "px";
        document.getElementById("summe").textContent = "Summe der selektierten Reiskörner:" + "\r\n" + "Dezimal: " + zahlDerKoerner.toString() + "\r\n" + "Hexadezimal: " + zahlDerKoerner.toString(16);
    });
});    
    
