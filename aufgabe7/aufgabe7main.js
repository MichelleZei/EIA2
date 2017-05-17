//Aufgabe: Aufgabe7 - Classses
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 9.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    window.addEventListener("load", init);
    let bees = [];
    let flowers = [];
    let n = 10;
    let imgData;
    function init(_event) {
        let y = 0;
        let x = 0;
        let fillColor = "#A9F5F2";
        let b = new L7_Classes.Background(x, y, fillColor);
        let f = new L7_Classes.Flower(x, y);
        L7_Classes.canvas = document.getElementsByTagName("canvas")[0];
        L7_Classes.crc2 = L7_Classes.canvas.getContext("2d");
        // Funktionen aufrufen, die gemalt werden sollen
        b.drawBackground();
        b.drawSun();
        b.drawWiese();
        b.drawMountain1();
        b.drawMountain2();
        b.drawIce1();
        b.drawIce2();
        b.drawBienenkorb();
        // Zufallsblumen
        for (let i = 0; i < 30; i++) {
            f.setRandomPosition();
            switch (f.zufallszahlBlumen) {
                case 0:
                    f.drawFlower1();
                    break;
                case 1:
                    f.drawFlower2();
                    break;
                case 2:
                    f.drawFlower3();
                    break;
                default:
                    break;
            }
            flowers.push(new L7_Classes.Flower(x, y));
        }
        imgData = L7_Classes.crc2.getImageData(0, 0, 300, 300);
        // Koordinaten der �ffnung des Bienenkorbs
        for (let i = 0; i < n; i++) {
            let s = new L7_Classes.Bienen(25, 210, "#000000", "#B9FFFF", (Math.random() * 2));
            s.setPosition();
            s.setStyle();
            s.move();
            bees[i] = s;
        }
        window.setTimeout(animate, 20);
        // Durch Klick auf den Canvas wird eine neue Biene hinzugef�gt
        L7_Classes.canvas.addEventListener("click", fuegeEineBieneDazu);
        L7_Classes.canvas.addEventListener("touch", fuegeEineBieneDazu);
    }
    // Animation der Bienen
    function animate() {
        L7_Classes.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < bees.length; i++) {
            let s = bees[i];
            s.animate();
            s.drawBee();
        }
        window.setTimeout(animate, 20);
    }
    // hinzuf�gen der Bienen 
    function fuegeEineBieneDazu(_event) {
        let bienen = new L7_Classes.Bienen(25, 210, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "#B9FFFF", (Math.random() * 2));
        bees.push(bienen);
        n++;
    }
    console.log(bees);
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=aufgabe7main.js.map