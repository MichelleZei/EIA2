//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 18.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L8_Inheritance {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let normalBees: Bienen[] = [];
    let honeyBees: Bienen[] = []; 
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
            let zufallszahlBlumen: number = Math.floor((Math.random() * 4) + 0);
            switch (zufallszahlBlumen) {
                case 0:
                    let f1: Flower1 = new Flower1(x, y);
                    f1.setRandomPosition();
                    f1.draw();
                    break;

                case 1:
                    let f2: Flower2 = new Flower2(x, y);
                    f2.setRandomPosition();
                    f2.draw();
                    break;

                case 2:
                    let f3: Flower3 = new Flower3(x, y);
                    f3.setRandomPosition();
                    f3.draw();
                    break;

                default:
                    break;
            }
            flowers.push(new Flower(x, y));
        }
        console.log(flowers);

        imgData = crc2.getImageData(0, 0, 300, 300);

        // Koordinaten der ÷ffnung des Bienenkorbs

        for (let i: number = 0; i < 10; i++) {
            let nb: NormalBees = new NormalBees(25, 210, "#000000", "#B9FFFF", (Math.random() * 2));
            normalBees[i] = nb; 
        }
        
        for (let i: number = 0; i < 5; i++) {
            let honey: HoneyBees = new HoneyBees(25, 210, "#000000", "#B9FFFF", (Math.random() * 2));
            honeyBees[i] = honey;
        }
//        console.log(Bienen);

        window.setTimeout(animate, 20);

        // Durch Klick auf den Canvas wird eine neue Biene hinzugef¸gt
        canvas.addEventListener("click", fuegeEineBieneDazu);
        canvas.addEventListener("touch", fuegeEineBieneDazu);
    }

    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < Bienen.length; i++) {
            let nb: Bienen = normalBees[i];
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

    // hinzuf¸gen der Bienen 
    function fuegeEineBieneDazu(_event: Event): void {
        let bienen: Bienen = new NormalBees(25, 210, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "#B9FFFF", (Math.random() * 2));
        normalBees.push(bienen);
        n++;
    }
    //    console.log(bees);
}


