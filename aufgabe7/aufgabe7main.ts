//Aufgabe: Aufgabe7 - Classses
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 9.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L7_Classes {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let bees: Bienen[] = [];
    let flowers: Flower[] = [];
    let n: number = 10;
    let imgData: ImageData;

    function init(_event: Event): void {
        let y: number = 0;
        let x: number = 0;
        let fillColor: string = "#A9F5F2";
        let b: Background = new Background(x, y, fillColor);

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
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
        for (let i: number = 0; i < 30; i++) {
            let f: Flower = new Flower(x, y);
            f.setRandomPosition();
            let zufallszahlBlumen: number = Math.floor((Math.random() * 4) + 0);
            switch (zufallszahlBlumen) {
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
            flowers.push(new Flower(x, y));
        }

        imgData = crc2.getImageData(0, 0, 300, 300);

        // Koordinaten der �ffnung des Bienenkorbs

        for (let i: number = 0; i < 10; i++) {
            let s: Bienen = new Bienen(25, 210, "#000000", "#B9FFFF", (Math.random() * 2));
            s.setPosition();
            s.setStyle();
            s.move();
            bees[i] = s;
        }

        window.setTimeout(animate, 20);

        // Durch Klick auf den Canvas wird eine neue Biene hinzugef�gt
        canvas.addEventListener("click", fuegeEineBieneDazu);
        canvas.addEventListener("touch", fuegeEineBieneDazu);
    }

    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < bees.length; i++) {
            let s: Bienen = bees[i];
            s.animate();
            s.drawBee();
        }
        window.setTimeout(animate, 20);
    }

    // hinzuf�gen der Bienen 
    function fuegeEineBieneDazu(_event: Event): void {
        let bienen: Bienen = new Bienen(25, 210, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "#B9FFFF", (Math.random() * 2));
        bees.push(bienen);
        n++;
    }
    console.log(bees);
}


