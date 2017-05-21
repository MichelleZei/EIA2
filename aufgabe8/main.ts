//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 18.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L8_Inheritance {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let flowers: Flower[] = [];
    let allBees: Bienen[] = [];
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

        //Bild speichern

        imgData = crc2.getImageData(0, 0, 300, 300);

        // Koordinaten der Öffnung des Bienenkorbs

        for (let i: number = 0; i < 5; i++) {
            let nb: NormalBees = new NormalBees();
            allBees.push(nb);
        }

        for (let i: number = 0; i < 5; i++) {
            let honey: HoneyBees = new HoneyBees();
            allBees.push(honey);
        }
        console.log(allBees);

        window.setTimeout(animate, 20);

        // Durch Klick auf den Canvas wird eine neue Biene hinzugefügt
        canvas.addEventListener("click", fuegeEineBieneDazu);
        canvas.addEventListener("touch", fuegeEineBieneDazu);
    }

    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < allBees.length; i++) {
            let all: Bienen = allBees[i];
            if (all.x < 0) {
                all.x = 300;
            }
            if (all.x > 300) {
                all.x = 0;
            }
            if (all.y < 0) {
                all.y = 300;
            }
            if (all.y > 300) {
                all.y = 0;
            }
            all.update();
        }
        window.setTimeout(animate, 20);
    }

    // hinzufügen der Bienen 
    function fuegeEineBieneDazu(_event: Event): void {
        let all: Bienen = new HoneyBees();
        allBees.push(all);
        n++;
    }
}


