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
    let n: number = 2;
    let h: number = 0;
    let status: boolean = false;
    let y: number;
    let x: number;
    let fillColor: string;
    let color: string = "#81F7F3";
    let colorbody: string = "#31B404";

    function init(_event: Event): void {

        setInterval(addUfoRechts, 1000);
        setInterval(addUfoLinks, 1000);
        let b: Background = new Background(x, y, fillColor);
        let button: HTMLElement = document.getElementsByTagName("button")[0];

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Funktionsaufruf, um den Hintergrund zu zeichnen

        b.draw();

        //Bild speichern

        imgData = crc2.getImageData(0, 0, 600, 600);

        // UfosRechts und UfosLinks fünf mal malen

        for (let i: number = 0; i < n; i++) {
            let rechts: UfosRechts = new UfosRechts(x, y, color, colorbody, status);
            ufos.push(rechts);
        }
        for (let i: number = 0; i < n; i++) {
            let links: UfosLinks = new UfosLinks(x, y, color, colorbody, status);
            ufos.push(links);
        }

        console.log(ufos);
        console.log(status);

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
                if (status == false) {
                    // dann soll es nach unten fallen, die Zahl der abgeschossenen Ufos erhöhen und den status auf true (getroffen) ändern.
                    ufos[i].status = true; // getroffen
//                    falldown(i, u, status);
                    h++;
                    TrefferZaehlen(h);
                }

            }
        }
    }

    // Funktion, die die angeklickten Ufos runterfallen lässt

//    function falldown(_i: number, _u: Ufos, _status: boolean): void {
//        crc2.putImageData(imgData, 0, 0);
//        for (let i: number = 0; i < ufos.length; i++) {
//            let u: Ufos = ufos[_i];
//            if (u.y > 700) {
//                ufos.splice(i);
//                console.log(ufos.length);
//            }
//            _u.fall();
//            _u.draw();
//            window.setTimeout(falldown(_i, _u, _status), 20);
//        }
//    }

    // Funktion, die die Abgeschossenen Ufos mitgezählt werden

    function TrefferZaehlen(_h: number): void {
        let zaehlen: HTMLElement = document.getElementById("hochzaehlen");
        zaehlen.innerText = "Treffer: " + _h.toString();
    }

    // Funktion, wie sich die Ufos bewegen und was passiert, wenn sie rechts oder links aus dem Canvas fliegen

    function animate(_i: number, _u: Ufos, _status: boolean): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < ufos.length; i++) {
            let u: Ufos = ufos[i];
            if (u.x > 640) {
                nichtErwischt.push(u);
            }
            if (u.x < -40) {
                nichtErwischt.push(u);
            }
            u.move();
            u.draw();
            if (nichtErwischt.length == 20) {
                alert("Game Over");
                location.reload();
            }
        }
        window.setTimeout(animate, 20);
    }

    // Nochmal von neu anfangen (Seite lädt nochmal neu)

    function reload(): void {
        location.reload();
    }
    
    // Ufos fliegen von allein nach einer bestimmten Zeit rein.
    
    function addUfoRechts(): void {
        let neu: Ufos = new UfosRechts(x, y, color, colorbody, status);
        ufos.push(neu);
        n++;
    }

    function addUfoLinks(): void {
        let neu: Ufos = new UfosLinks(x, y, color, colorbody, status);
        ufos.push(neu);
        n++;
    }
}
