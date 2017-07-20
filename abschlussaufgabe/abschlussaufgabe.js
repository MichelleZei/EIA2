//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 12.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe;
(function (abschlussaufgabe) {
    window.addEventListener("load", start);
    // Startbildschirm mit kurzer Erkl�rung zum Spiel
    function start(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 600;
        canvas.height = 600;
        // EventListener, um das Spiel zu beginnen
        canvas.addEventListener("click", init);
        canvas.addEventListener("touch", init);
        let crc2;
        crc2 = canvas.getContext("2d");
        // Hintergrund
        crc2.beginPath();
        crc2.fillStyle = "#070719";
        crc2.strokeStyle = "#070719";
        crc2.moveTo(0, 0);
        crc2.rect(0, 0, 600, 600);
        crc2.closePath();
        crc2.fill();
    }
    let imgData;
    abschlussaufgabe.ufos = []; // Array f�r alle Ufos
    let nichtErwischt = []; // Array f�r die Ufos, die nicht getroffen wurden und aus dem Canvas herausgeflogen sind
    let n = 2; // Anzahl der Ufos zum Anfang
    let h = 0; // wird zum hochz�hlen der Treffer verwendet
    let status = false; // Status der Ufos (getroffen [true] oder nicht getroffen [false])
    let y; // y-Position
    let x; // x-Position
    let fillColor; // Farbe f�r den Hintergrund
    let color = "#81F7F3"; // Farbe f�r das Glasgeh�use
    let colorbody = "#31B404"; // Farbe des Ufos
    let colorAlien = "#FF4000"; // Farbe des Aliens
    // Spielbeginn, nachdem man auf den Startbildschirm geklickt hat
    function init(_event) {
        // Interval daf�r, dass automatisch neue Ufos hinzugef�gt werden
        setInterval(addUfoRechts, 1200);
        setInterval(addUfoLinks, 1800);
        // Deklaration von Variablen
        let b = new abschlussaufgabe.Background(x, y, fillColor);
        let button = document.getElementsByTagName("button")[0];
        let alieninvasion = document.getElementsByTagName("h1")[0];
        let starttext = document.getElementById("start");
        // Style (was nach Spielbeginn noch angezeigt werden soll)
        alieninvasion.style.display = "none";
        starttext.style.display = "none";
        button.style.display = "inline";
        abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        abschlussaufgabe.crc2 = abschlussaufgabe.canvas.getContext("2d");
        // Funktionsaufruf, um den Hintergrund zu zeichnen
        b.draw();
        //Bild speichern
        imgData = abschlussaufgabe.crc2.getImageData(0, 0, 600, 600);
        //Entfernt Klick und Touch Event auf Canvas, das die init Funktion aufruft.
        abschlussaufgabe.canvas.removeEventListener("click", init);
        abschlussaufgabe.canvas.removeEventListener("touch", init);
        // UfosRechts und UfosLinks f�nf mal malen
        //        for (let i: number = 0; i < n; i++) {
        //            let rechts: UfosRechts = new UfosRechts(x, y, color, colorbody, colorAlien, status);
        //            ufos.push(rechts);
        //        }
        //        for (let i: number = 0; i < n; i++) {
        //            let links: UfosLinks = new UfosLinks(x, y, color, colorbody, colorAlien, status);
        //            ufos.push(links);
        //        }
        // Cursor style ge�ndert
        document.getElementById("canvas").style.cursor = "crosshair";
        // Konsolenausgabe
        console.log(abschlussaufgabe.ufos);
        console.log(status);
        window.setTimeout(animate, 20);
        //EventListener auf Canvas legen
        abschlussaufgabe.canvas.addEventListener("click", abschiessen);
        abschlussaufgabe.canvas.addEventListener("touch", abschiessen);
        button.addEventListener("click", reload);
        button.addEventListener("touch", reload);
    }
    // Wenn ein Klick auf das Canvas erfolgt ist, 
    function abschiessen(_event) {
        // wird �ber jedes Ufo dr�ber geschaut, 
        for (let i = 0; i < abschlussaufgabe.ufos.length; i++) {
            let u = abschlussaufgabe.ufos[i];
            let diffx = u.x - _event.clientX; // Abstand des Mausklicks zur x-Position des Ufos[i] ermitteln
            let diffy = u.y - _event.clientY; // Abstand des Mausklicks zur y-Position des Ufos[i] ermitteln
            // ob es in der N�he des Klicks war. Wenn ja, 
            if (Math.abs(diffx) < 50 && Math.abs(diffy) < 50) {
                if (u.status == false) {
                    // der Status wird auf true (getroffen) ge�ndert, sodass in der move() Funktion die Funktion fall() aufgerufen wird und das Ufo noch unten f�llt.
                    u.status = true;
                    // Zahl der abgeschossenen Ufos erh�hen
                    h++;
                    // Funktionsaufruf
                    TrefferZaehlen(h);
                }
            }
        }
    }
    // Funktion, die die Zahl der abgeschossenen Ufos in das HTMLDocument schreibt
    function TrefferZaehlen(_h) {
        let zaehlen = document.getElementById("hochzaehlen");
        zaehlen.innerText = "Treffer: " + _h.toString();
    }
    // Funktion, wie sich die Ufos bewegen und was passiert, wenn sie rechts oder links aus dem Canvas fliegen
    function animate(_i, _u, _status) {
        abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < abschlussaufgabe.ufos.length; i++) {
            let u = abschlussaufgabe.ufos[i];
            if (u.x == 640) {
                nichtErwischt.push(abschlussaufgabe.ufos[i]);
            }
            if (u.x == -40) {
                nichtErwischt.push(abschlussaufgabe.ufos[i]);
            }
            if (u.y == 700) {
                abschlussaufgabe.ufos.splice(i);
                console.log(abschlussaufgabe.ufos.length);
            }
            u.update();
        }
        window.setTimeout(animate, 20);
        // Bedingung, dass wenn mehr als 10 Ufos nicht erwischt wurden, man Game over ist.
        if (nichtErwischt.length > 10) {
            alert("Game Over");
            location.reload();
        }
        // Konsolenausgabe
        console.log(nichtErwischt.length);
    }
    // Funktion daf�r, dass wenn man auf den Button "Starte neu" dr�ckt, man nochmal von neu anfangen kann(Seite l�dt nochmal neu)
    function reload() {
        location.reload();
    }
    // Ufos fliegen von allein nach einer bestimmten Zeit rein.
    function addUfoRechts() {
        let neu = new abschlussaufgabe.UfosRechts(x, y, color, colorbody, colorAlien, status);
        abschlussaufgabe.ufos.push(neu);
        n++;
    }
    function addUfoLinks() {
        let neu = new abschlussaufgabe.UfosLinks(x, y, color, colorbody, colorAlien, status);
        abschlussaufgabe.ufos.push(neu);
        n++;
    }
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=abschlussaufgabe.js.map