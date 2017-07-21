//Aufgabe: Aufgabe3a
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 9.4.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace A3a {
    document.addEventListener("DOMContentLoaded", init);
    function init(): void {
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
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            let s: CSSStyleDeclaration = div.style;
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
            var alphas: string[];
            let feld: NodeListOf<Element> = document.getElementsByClassName("felder");
            console.log(feld);
            let anzahlKoerner: number;
            for (let i: number = 0; i < feld.length; i++) {
                anzahlKoerner = Math.pow(2, i);
                if (i > 32) {
                    var anzahlKoernerAsString: string = String(anzahlKoerner);
                    anzahlKoernerAsString = anzahlKoerner.toExponential(6);
                }
                feld[i].textContent = anzahlKoerner.toString();
            }
        }

        //Beginn Aufgabe 3a

        Markierung();

//        let selected: HTMLDivElement;

        function Markierung(): void {
            let anzahlKoerner: number = 0;
            let divs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
            for (let i: number = 0; i < 9; i++) {
                divs[i].addEventListener("click", summeAnzeigen.bind(anzahlKoerner));
            }
        }

        function summeAnzeigen(_event: Event, _anzahlKoerner: number): void {
            let div: HTMLDivElement = <HTMLDivElement>_event.target;
            console.log(div);
            div.classList.toggle("selected");
            let selectedDivs: NodeListOf<Element> = document.getElementsByClassName("selected");
            if (selectedDivs.length == 0) {
                document.getElementById("summe").style.display = "none";
            }
            else {
                document.getElementById("summe").style.display = "block";
            }
            for (var i: number = 0; i < selectedDivs.length; i++) {
                _anzahlKoerner = Number(selectedDivs[i].textContent);
                document.getElementById("summe").textContent = "Summe der Reiskoerner:" + "\r\n" + "Dezimal: " + _anzahlKoerner.toString() + "\r\n" + "Hexadezimal: " + _anzahlKoerner.toString(16);
            }
        }
        document.addEventListener("mousemove", getSumme);

        function getSumme(_event: MouseEvent): void {
            document.getElementById("summe").style.left = (_event.clientX + 10) + "px";
            document.getElementById("summe").style.top = (_event.clientY + 10) + "px";
        }
    }
}   
