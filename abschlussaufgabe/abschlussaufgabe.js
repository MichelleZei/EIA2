//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 12.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe;
(function (abschlussaufgabe) {
    window.addEventListener("load", init);
    let imgData;
    let ufos = [];
    let nichtErwischt = [];
    let n = 2;
    let h = 0;
    let status = false;
    let y;
    let x;
    let fillColor;
    let color = "#81F7F3";
    let colorbody = "#31B404";
    function init(_event) {
        setInterval(addUfoRechts, 1000);
        setInterval(addUfoLinks, 1000);
        let b = new abschlussaufgabe.Background(x, y, fillColor);
        let button = document.getElementsByTagName("button")[0];
        abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        abschlussaufgabe.crc2 = abschlussaufgabe.canvas.getContext("2d");
        // Funktionsaufruf, um den Hintergrund zu zeichnen
        b.draw();
        //Bild speichern
        imgData = abschlussaufgabe.crc2.getImageData(0, 0, 600, 600);
        // UfosRechts und UfosLinks f�nf mal malen
        for (let i = 0; i < n; i++) {
            let rechts = new abschlussaufgabe.UfosRechts(x, y, color, colorbody, status);
            ufos.push(rechts);
        }
        for (let i = 0; i < n; i++) {
            let links = new abschlussaufgabe.UfosLinks(x, y, color, colorbody, status);
            ufos.push(links);
        }
        console.log(ufos);
        console.log(status);
        window.setTimeout(animate, 20);
        //EventListener auf Canvas legen
        abschlussaufgabe.canvas.addEventListener("click", abschiessen);
        abschlussaufgabe.canvas.addEventListener("touch", abschiessen);
        button.addEventListener("click", reload);
    }
    // Wenn ein Klick auf das Canvas erfolgt ist, 
    function abschiessen(_event) {
        // wird �ber jedes Ufo dr�ber geschaut, 
        for (let i = 0; i < ufos.length; i++) {
            let u = ufos[i];
            let diffx = u.x - _event.clientX; // Abstand des Mausklicks zur x-Position des Ufos[i] ermitteln
            let diffy = u.y - _event.clientY; // Abstand des Mausklicks zur y-Position des Ufos[i] ermitteln
            // ob es in der N�he des Klicks war. Wenn ja, 
            if (Math.abs(diffx) < 60 && Math.abs(diffy) < 60) {
                if (u.status == false) {
                    // dann soll es nach unten fallen, die Zahl der abgeschossenen Ufos erh�hen und den status auf true (getroffen) �ndern.
                    u.status = true;
                    h++;
                    TrefferZaehlen(h);
                    console.log(status);
                }
            }
        }
    }
    // Funktion, die die Abgeschossenen Ufos mitgez�hlt werden
    function TrefferZaehlen(_h) {
        let zaehlen = document.getElementById("hochzaehlen");
        zaehlen.innerText = "Treffer: " + _h.toString();
    }
    // Funktion, wie sich die Ufos bewegen und was passiert, wenn sie rechts oder links aus dem Canvas fliegen
    function animate(_i, _u, _status) {
        abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < ufos.length; i++) {
            let u = ufos[i];
            if (u.x > 640) {
                nichtErwischt.push(ufos[i]);
            }
            if (u.x < -40) {
                nichtErwischt.push(ufos[i]);
            }
            if (u.y > 700) {
                ufos.splice(i);
                console.log(ufos.length);
            }
            u.move();
            u.draw();
        }
        if (nichtErwischt.length > 20) {
            alert("Game Over");
            location.reload();
        }
        window.setTimeout(animate, 20);
    }
    // Nochmal von neu anfangen (Seite l�dt nochmal neu)
    function reload() {
        location.reload();
    }
    // Ufos fliegen von allein nach einer bestimmten Zeit rein.
    function addUfoRechts() {
        let neu = new abschlussaufgabe.UfosRechts(x, y, color, colorbody, status);
        ufos.push(neu);
        n++;
    }
    function addUfoLinks() {
        let neu = new abschlussaufgabe.UfosLinks(x, y, color, colorbody, status);
        ufos.push(neu);
        n++;
    }
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=abschlussaufgabe.js.map