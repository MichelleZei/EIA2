//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 12.07.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace abschlussaufgabe {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    let ufos: Ufos[] = [];
    let nichtErwischt: Ufos[] = [];
    let n: number = 5;
    let h: number = 0;

    function init(_event: Event): void {
        let y: number;
        let x: number;
        let fillColor: string;
        let color: string = "#81F7F3";
        let colorbody: string = "#31B404";
        let b: Background = new Background(x, y, fillColor);
        let button: HTMLElement = document.getElementsByTagName("button")[0];

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Funktionsaufruf, um den Hintergrund zu zeichnen

        b.draw();

        //Bild speichern

        imgData = crc2.getImageData(0, 0, 600, 600);

        // UfosRechts und UfosLinks fünf mal malen

        for (let i: number = 0; i < 5; i++) {
            let rechts: UfosRechts = new UfosRechts(x, y, color, colorbody);
            ufos.push(rechts);
        }
        for (let i: number = 0; i < 5; i++) {
            let links: UfosLinks = new UfosLinks(x, y, color, colorbody);
            ufos.push(links);
        }

        console.log(ufos);

        window.setTimeout(animate, 20);

        //EventListener auf Canvas legen

        canvas.addEventListener("click", abschiessen);
        canvas.addEventListener("touch", abschiessen);
        button.addEventListener("click", reload);
    }

    // Wenn ein Klick auf das Canvas erfolgt ist, 

    function abschiessen(_event: MouseEvent): void {

        // wird über jedes Ufo drüber geschaut, 

        for (let i: number = 0; i < ufos.length; i++) {

            let u: Ufos = ufos[i];
            let diffx: number = ufos[i].x - _event.clientX; // Abstand des Mausklicks zur x-Position des Ufos[i] ermitteln
            let diffy: number = ufos[i].y - _event.clientY; // Abstand des Mausklicks zur y-Position des Ufos[i] ermitteln

            // ob es in der Nähe des Klicks war. Wenn ja, 

            if (Math.abs(diffx) < 60 && Math.abs(diffy) < 60) {

                // dann soll es nach unten fallen und die Zahl der abgeschossenen Ufos erhöhen.
                falldown(i, u);
                h++;
                TrefferZaehlen(h);
            }
        }
    }

    // Funktion, die die angeklickten Ufos runterfallen lässt

    function falldown(_i: number, _u: Ufos): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < n; i++) {
            //            _u.fall();
            _u.y += 10;
            _u.draw();
        }
        window.setTimeout(falldown, 20);
    }

    // Funktion, die die Abgeschossenen Ufos mitgezählt werden

    function TrefferZaehlen(_h: number): void {
        let zaehlen: HTMLElement = document.getElementById("hochzaehlen");
        zaehlen.innerText = "Treffer: " + _h.toString();
    }

    // Funktion, wie sich die Ufos bewegen und was passiert, wenn sie rechts oder links aus dem Canvas fliegen

    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < n; i++) {
            let u: Ufos = ufos[i];
            if (u.x > 630) {
                nichtErwischt.push(u);
            }
            if (u.x < -30) {
                nichtErwischt.push(u);
            }

            u.move();
            u.draw();
            if (nichtErwischt.length == 20) {
                alert("Game Over");
            }
        }

        window.setTimeout(animate, 20);
    }

    // Nochmal von neu anfangen (Seite lädt nochmal neu)

    function reload(): void {
        location.reload();
    }
}
