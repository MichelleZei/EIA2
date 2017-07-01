//Aufgabe: Uebung - Ufos fliegen lassen
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 30.6.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var uebung;
(function (uebung) {
    window.addEventListener("load", init);
    let ufos = [];
    uebung.canvas = document.getElementsByTagName("canvas")[0];
    let n = 1;
    let imgData;
    uebung.crc2 = uebung.canvas.getContext("2d");
    function init(_event) {
        //Funktionsaufrufe f�r die Dinge, die gemalt werden sollen
        drawBackground(0, 0, "#070719");
        //Bild speichern
        imgData = uebung.crc2.getImageData(0, 0, 600, 600);
        for (let i = 0; i < n; i++) {
            let gruen = new uebung.GrueneUfos();
            ufos.push(gruen);
        }
        for (let i = 0; i < n; i++) {
            let rot = new uebung.RoteUfos();
            ufos.push(rot);
        }
        window.setTimeout(animate, 20);
        uebung.canvas.addEventListener("click", fuegeEinUfoDazu);
    }
    function drawBackground(_x, _y, _color) {
        uebung.crc2.beginPath();
        uebung.crc2.fillStyle = _color;
        uebung.crc2.fillRect(_x, _y, 600, 600);
        uebung.crc2.closePath();
    }
    //Animation des Ufos
    function animate() {
        uebung.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            let u = ufos[i];
            u.x += Math.random();
            u.y += Math.random() * -1;
            if (u.x > 600) {
                u.x = 0;
            }
            if (u.y > 600) {
                u.y = 0;
            }
            if (u.x < 0) {
                u.x = 600;
            }
            if (u.y < 0) {
                u.y = 600;
            }
            u.draw();
        }
        window.setTimeout(animate, 20);
    }
    //Beim Klick auf den Canvas ein Ufo hinzuf�gen
    function fuegeEinUfoDazu(_event) {
        let allUfos = new uebung.GrueneUfos();
        ufos.push(allUfos);
        n++;
    }
})(uebung || (uebung = {}));
//# sourceMappingURL=uebung2.js.map