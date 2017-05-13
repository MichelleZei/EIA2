//Aufgabe: Aufgabe7 - Classses
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 9.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L7_Classes {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let bees: Bienen[] = [];
    let n: number = 10;
    let imgData: ImageData;

    function init(_event: Event): void {
        let y: number = 0;
        let x: number = 0;
        let fillColor: string = "#A9F5F2";
        let b: Background = new Background(x, y, fillColor);
        let f: Flower = new Flower(x, y);

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
        f.setZufallsblume();

        imgData = crc2.getImageData(0, 0, 300, 300);

        // Koordinaten der ÷ffnung des Bienenkorbs

        for (let i: number = 0; i < n; i++) {
            let s: Bienen = new Bienen();
            s.setPosition();
            s.setStyle();
            s.move();
            bees[i] = s;
        }

        window.setTimeout(animate, 20);

        // Durch Klick auf den Canvas wird eine neue Biene hinzugef¸gt
        canvas.addEventListener("click", fuegeEineBieneDazu);
        canvas.addEventListener("touch", fuegeEineBieneDazu);
    }

    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < n; i++) {
            let s: Bienen = bees[i];
            s.animate();
            s.drawBee();
        }
        window.setTimeout(animate, 20);
    }

    // hinzuf¸gen der Bienen 
    function fuegeEineBieneDazu(_event: Event): void {
        let s: Bienen = new Bienen;
        bees.push(s);
        //        bees.push();
        //        n++;
    } console.log(bees);
}


