//Aufgabe: Aufgabe3a
//Name: Michelle Zeiﬂner
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

    function placeDiv(_x: number, _y: number, _size: number, _color: string): void {
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

    function zahlDerKoerner(): void {
        let feld = document.getElementsByClassName("felder");
        let anzahlKoerner: any;
        for (let i: number = 0; i < feld.length; i++) {
            anzahlKoerner = Math.pow(2, i);
            if (i > 32) {
                anzahlKoerner = anzahlKoerner.toExponential(6);
            }
            feld[i].textContent = anzahlKoerner.toString();
        }
    }

    //Beginn Aufgabe 3a

    Markierung();

    let selected: HTMLDivElement;

    function Markierung(): void {
        let anzahlKoerner: number = 0;
        let divs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        for (let i: number = 0; i < 9; i++) {
            divs[i].addEventListener("click", function(): any {
                this.classList.toggle("selected");
                let selectedDivs: any = document.getElementsByClassName("selected");
                if (selectedDivs.length == 0) {
                    document.getElementById("summe").style.display = "none";
                }
                else {
                    document.getElementById("summe").style.display = "block";
                }
                for (var i: number = 0; i < selectedDivs.length; i++) {
                    anzahlKoerner = Number(selectedDivs[i].textContent);
                    document.getElementById("summe").textContent = "Summe der Reiskoerner:" + "\r\n" + "Dezimal: " + anzahlKoerner.toString() + "\r\n" + "Hexadezimal: " + anzahlKoerner.toString(16);
                }
            });
        }
    }
    });
document.addEventListener("mousemove", function(Event): any {
        document.getElementById("summe").style.left = (Event.clientX + 10) + "px";
        document.getElementById("summe").style.top = (Event.clientY + 10) + "px";
});    
    
