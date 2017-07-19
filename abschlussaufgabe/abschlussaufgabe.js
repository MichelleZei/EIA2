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
    let n = 5;
    let h = 0;
    function init(_event) {
        let y;
        let x;
        let fillColor;
        let color = "#81F7F3";
        let colorbody = "#31B404";
        let b = new abschlussaufgabe.Background(x, y, fillColor);
        abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        abschlussaufgabe.crc2 = abschlussaufgabe.canvas.getContext("2d");
        // Funktionsaufruf, um den Hintergrund zu zeichnen
        b.draw();
        //Bild speichern
        imgData = abschlussaufgabe.crc2.getImageData(0, 0, 600, 600);
        // UfosRechts und UfosLinks f�nf mal malen
        for (let i = 0; i < 5; i++) {
            let rechts = new abschlussaufgabe.UfosRechts(x, y, color, colorbody);
            ufos.push(rechts);
        }
        for (let i = 0; i < 5; i++) {
            let links = new abschlussaufgabe.UfosLinks(x, y, color, colorbody);
            ufos.push(links);
        }
        console.log(ufos);
        window.setTimeout(animate, 20);
        //EventListener auf Canvas legen
        abschlussaufgabe.canvas.addEventListener("click", abschiessen);
        abschlussaufgabe.canvas.addEventListener("touch", abschiessen);
    }
    // Wenn ein Klick auf das Canvas erfolgt ist, 
    function abschiessen(_event) {
        // wird �ber jedes Ufo dr�ber geschaut, 
        for (let i = 0; i < ufos.length; i++) {
            let u = ufos[i];
            let diffx = ufos[i].x - _event.clientX; // Abstand des Mausklicks zur x-Position des Ufos[i] ermitteln
            let diffy = ufos[i].y - _event.clientY; // Abstand des Mausklicks zur y-Position des Ufos[i] ermitteln
            // ob es in der N�he des Klicks war. Wenn ja, 
            if (Math.abs(diffx) < 60 && Math.abs(diffy) < 60) {
                // dann soll es nach unten fallen und die Zahl der abgeschossenen Ufos erh�hen.
                falldown(i, u);
                h++;
                hochzaehlen(h);
                console.log(h);
            }
        }
    }
    // Funktion, dass die angeklickten Ufos runterfallen
    function falldown(_i, _u) {
        abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            //            _u.fall();
            _u.y += 10;
            _u.draw();
        }
        window.setTimeout(falldown, 20);
    }
    // Funktion, dass die Abgeschossenen Ufos mitgez�hlt werden
    function hochzaehlen(_h) {
        let hochzaehlen = document.getElementById("hochzaehlen");
        hochzaehlen.innerText = "Treffer: " + _h.toString();
    }
    // Funktion, wie sich die Ufos bewegen und was passiert, wenn sie rechts oder links aus dem Canvas fliegen
    function animate() {
        abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            let u = ufos[i];
            if (u.x > 600) {
                alert("Game Over");
            }
            //            if (u.y > 600) {
            //                alert("Game Over");
            //            }
            if (u.x < 0) {
                alert("Game Over");
            }
            //            if (u.y < 0) {
            //                alert("Game Over");
            //            }
            u.move();
            u.draw();
        }
        window.setTimeout(animate, 20);
    }
    console.log(nichtErwischt);
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=abschlussaufgabe.js.map