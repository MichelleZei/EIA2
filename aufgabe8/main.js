//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 18.5.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    window.addEventListener("load", init);
    let normalBees = [];
    let honeyBees = [];
    let flowers = [];
    let n = 10;
    let imgData;
    function init(_event) {
        let y = 0;
        let x = 0;
        let fillColor = "#A9F5F2";
        let b = new L8_Inheritance.Background(x, y, fillColor);
        L8_Inheritance.canvas = document.getElementsByTagName("canvas")[0];
        L8_Inheritance.crc2 = L8_Inheritance.canvas.getContext("2d");
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
            let zufallszahlBlumen = Math.floor((Math.random() * 4) + 0);
            switch (zufallszahlBlumen) {
                case 0:
                    let f1 = new L8_Inheritance.Flower1(x, y);
                    f1.setRandomPosition();
                    f1.draw();
                    break;
                case 1:
                    let f2 = new L8_Inheritance.Flower2(x, y);
                    f2.setRandomPosition();
                    f2.draw();
                    break;
                case 2:
                    let f3 = new L8_Inheritance.Flower3(x, y);
                    f3.setRandomPosition();
                    f3.draw();
                    break;
                default:
                    break;
            }
            flowers.push(new L8_Inheritance.Flower(x, y));
        }
        console.log(flowers);
        imgData = L8_Inheritance.crc2.getImageData(0, 0, 300, 300);
        // Koordinaten der �ffnung des Bienenkorbs
        for (let i = 0; i < 10; i++) {
            let nb = new L8_Inheritance.NormalBees(25, 210, "#000000", "#B9FFFF", (Math.random() * 2));
            normalBees[i] = nb;
        }
        for (let i = 0; i < 5; i++) {
            let honey = new L8_Inheritance.HoneyBees(25, 210, "#000000", "#B9FFFF", (Math.random() * 2));
            honeyBees[i] = honey;
        }
        //        console.log(Bienen);
        window.setTimeout(animate, 20);
        // Durch Klick auf den Canvas wird eine neue Biene hinzugef�gt
        L8_Inheritance.canvas.addEventListener("click", fuegeEineBieneDazu);
        L8_Inheritance.canvas.addEventListener("touch", fuegeEineBieneDazu);
    }
    // Animation der Bienen
    function animate() {
        L8_Inheritance.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < L8_Inheritance.Bienen.length; i++) {
            let nb = normalBees[i];
            nb.animate();
            nb.draw();
        }
        //        for (let i: number = 0; i < Bienen.length; i++) {
        //            let honey: Bienen = honeyBees[i];
        //            honey.animate();
        //            honey.draw();    
        //        }
        window.setTimeout(animate, 20);
    }
    // hinzuf�gen der Bienen 
    function fuegeEineBieneDazu(_event) {
        let bienen = new L8_Inheritance.NormalBees(25, 210, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "#B9FFFF", (Math.random() * 2));
        normalBees.push(bienen);
        n++;
    }
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=main.js.map