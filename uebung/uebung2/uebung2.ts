//Aufgabe: Uebung - Ufos fliegen lassen
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 30.6.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace uebung {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let ufos: Ufos[] = [];
    export let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let n: number = 1;
    let imgData: ImageData;
    crc2 = canvas.getContext("2d");

    function init(_event: Event): void {

        //Funktionsaufrufe für die Dinge, die gemalt werden sollen

        drawBackground(0, 0, "#070719");

        //Bild speichern

        imgData = crc2.getImageData(0, 0, 600, 600);

        for (let i: number = 0; i < n; i++) {
            let gruen: GrueneUfos = new GrueneUfos();
            ufos.push(gruen);
        }
        for (let i: number = 0; i < n; i++) {
            let rot: RoteUfos = new RoteUfos();
            ufos.push(rot);
        }

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", fuegeEinUfoDazu);
    }

    function drawBackground(_x: number, _y: number, _color: string): void {
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.fillRect(_x, _y, 600, 600);
        crc2.closePath();
    }

    //Animation des Ufos

    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < n; i++) {
            let u: Ufos = ufos[i];
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

    //Beim Klick auf den Canvas ein Ufo hinzufügen

    function fuegeEinUfoDazu(_event: Event): void {
        let allUfos: Ufos = new GrueneUfos();
        ufos.push(allUfos);
        n++;
    }
}