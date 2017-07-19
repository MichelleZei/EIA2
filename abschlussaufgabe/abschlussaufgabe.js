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
    //    let ufosNichtErwischt: Ufos[] = [];
    let n = 5;
    function init(_event) {
        //Funktionsaufrufe f�r die Dinge, die gemalt werden sollen
        let y;
        let x;
        let fillColor;
        let color = "#81F7F3";
        let colorbody = "#31B404";
        let b = new abschlussaufgabe.Background(x, y, fillColor);
        abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        abschlussaufgabe.crc2 = abschlussaufgabe.canvas.getContext("2d");
        //Hintergrund zeichnen
        b.draw();
        //Bild speichern
        imgData = abschlussaufgabe.crc2.getImageData(0, 0, 600, 600);
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
            let h = 0;
            let u = ufos[i];
            let diffx = ufos[i].x - _event.clientX;
            let diffy = ufos[i].y - _event.clientY;
            // ob es in der N�he des Klicks war. Wenn ja, 
            if (Math.abs(diffx) < 60 && Math.abs(diffy) < 60) {
                // dann soll es nach unten fallen und die Zahl der abgeschossenen Ufos erh�hen.
                //                u.fall();
                falldown(i, u);
                h++;
                hochzaehlen(h);
                console.log(h);
            }
        }
    }
    function falldown(_i, _u) {
        abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            _u.fall();
            _u.draw();
        }
        //        _u.y += 10; //_u.fall();
        window.setTimeout(falldown, 20);
    }
    function hochzaehlen(_h) {
        let hochzaehlen = document.getElementById("hochzaehlen");
        hochzaehlen.innerText = "Abgeschossenen Ufos: " + _h.toString();
    }
    function animate() {
        abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            let u = ufos[i];
            if (u.x > 600) {
                alert("Game Over");
            }
            if (u.y > 600) {
                alert("Game Over");
            }
            if (u.x < 0) {
                alert("Game Over");
            }
            if (u.y < 0) {
                alert("Game Over");
            }
            u.move();
            u.draw();
        }
        window.setTimeout(animate, 20);
    }
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=abschlussaufgabe.js.map