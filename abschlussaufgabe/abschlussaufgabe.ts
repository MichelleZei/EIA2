//Aufgabe: Abschlussaufgabe zweites Semester
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 12.07.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace abschlussaufgabe {

    window.addEventListener("load", start);
    
    // Startbildschirm mit kurzer Erklärung zum Spiel

    function start(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.width = 600;
        canvas.height = 600;
        
        // EventListener, um das Spiel zu beginnen

        canvas.addEventListener("click", init);
        canvas.addEventListener("touch", init);

        let crc2: CanvasRenderingContext2D;
        crc2 = canvas.getContext("2d");

        // Hintergrund

        crc2.beginPath();
        crc2.fillStyle = "#070719";
        crc2.strokeStyle = "#070719";
        crc2.moveTo(0, 0);
        crc2.rect(0, 0, 600, 600);
        crc2.closePath();
        crc2.fill();
    }
    
    // Deklaration von Variablen
    
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    export let ufos: Ufos[] = []; // Array für alle Ufos
    let nichtErwischt: Ufos[] = []; // Array für die Ufos, die nicht getroffen wurden und aus dem Canvas herausgeflogen sind
    let n: number = 2; // Anzahl der Ufos zum Anfang
    let h: number = 0; // wird zum hochzählen der Treffer verwendet
    let status: boolean = false; // Status der Ufos (getroffen [true] oder nicht getroffen [false])
    let y: number; // y-Position
    let x: number; // x-Position
    let fillColor: string; // Farbe für den Hintergrund
    let color: string = "#81F7F3"; // Farbe für das Glasgehäuse
    let colorbody: string = "#31B404"; // Farbe des Ufos
    let colorAlien: string = "#FF4000"; // Farbe des Aliens
    
    // Spielbeginn, nachdem man auf den Startbildschirm geklickt hat

    function init(_event: MouseEvent): void {
        
        // Interval dafür, dass automatisch neue Ufos hinzugefügt werden
        
        setInterval(addUfoRechts, 1200);
        setInterval(addUfoLinks, 1800);
        
        // Deklaration von Variablen
        
        let b: Background = new Background(x, y, fillColor);
        let button: HTMLElement = document.getElementsByTagName("button")[0];
        let alieninvasion: HTMLElement = document.getElementsByTagName("h1")[0];
        let starttext: HTMLElement = document.getElementById("start");
        
        // Style (was nach Spielbeginn noch angezeigt werden soll)
        
        alieninvasion.style.display = "none";
        starttext.style.display = "none";
        button.style.display = "inline";

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Funktionsaufruf, um den Hintergrund zu zeichnen

        b.draw();

        //Bild speichern

        imgData = crc2.getImageData(0, 0, 600, 600);
        
        //Entfernt Klick und Touch Event auf Canvas, das die init Funktion aufruft.
        
        canvas.removeEventListener("click", init);
        canvas.removeEventListener("touch", init);

        // UfosRechts und UfosLinks fünf mal malen

        for (let i: number = 0; i < n; i++) {
            let rechts: UfosRechts = new UfosRechts(x, y, color, colorbody, colorAlien, status);
            ufos.push(rechts);
        }
        for (let i: number = 0; i < n; i++) {
            let links: UfosLinks = new UfosLinks(x, y, color, colorbody, colorAlien, status);
            ufos.push(links);
        }
        
        // Cursor style geändert
        
        document.getElementById("canvas").style.cursor = "crosshair";
        
        // Konsolenausgabe

        console.log(ufos);
        console.log(status);

        window.setTimeout(animate, 20);

        //EventListener auf Canvas legen

        canvas.addEventListener("click", abschiessen);
        canvas.addEventListener("touch", abschiessen);
        button.addEventListener("click", reload);
        button.addEventListener("touch", reload);
    }

    // Wenn ein Klick auf das Canvas erfolgt ist, 

    function abschiessen(_event: MouseEvent): void {

        // wird über jedes Ufo drüber geschaut, 

        for (let i: number = 0; i < ufos.length; i++) {

            let u: Ufos = ufos[i];
            let diffx: number = u.x - _event.clientX; // Abstand des Mausklicks zur x-Position des Ufos[i] ermitteln
            let diffy: number = u.y - _event.clientY; // Abstand des Mausklicks zur y-Position des Ufos[i] ermitteln

            // ob es in der Nähe des Klicks war. Wenn ja, 

            if (Math.abs(diffx) < 50 && Math.abs(diffy) < 50) {
                if (u.status == false) {
                    // der Status wird auf true (getroffen) geändert, sodass in der move() Funktion die Funktion fall() aufgerufen wird und das Ufo noch unten fällt.
                    u.status = true;
                    // Zahl der abgeschossenen Ufos erhöhen
                    h++;
                    // Funktionsaufruf
                    TrefferZaehlen(h);
                }
            }
        }
    }

    // Funktion, die die Zahl der abgeschossenen Ufos in das HTMLDocument schreibt

    function TrefferZaehlen(_h: number): void {
        let zaehlen: HTMLElement = document.getElementById("hochzaehlen");
        zaehlen.innerText = "Treffer: " + _h.toString();
    }

    // Funktion, wie sich die Ufos bewegen und was passiert, wenn sie rechts oder links aus dem Canvas fliegen

    function animate(_i: number, _u: Ufos, _status: boolean): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < ufos.length; i++) {
            let u: Ufos = ufos[i];
            if (u.x == 640) {
                nichtErwischt.push(ufos[i]);
            }
            if (u.x == -40) {
                nichtErwischt.push(ufos[i]);
            }
            if (u.y == 700) {
                ufos.splice(i);
                console.log(ufos.length);
            }
            u.update();
        }
        window.setTimeout(animate, 20);
        
        // Bedingung, dass wenn mehr als 10 Ufos nicht erwischt wurden, man Game over ist.
        
        if (nichtErwischt.length > 10) {
            alert("Game Over");
            location.reload();
        }
        
        // Konsolenausgabe
        
        console.log(nichtErwischt.length);
    }

    // Funktion dafür, dass wenn man auf den Button "Starte neu" drückt, man nochmal von neu anfangen kann(Seite lädt nochmal neu)

    function reload(): void {
        location.reload();
    }

    // Ufos fliegen von allein nach einer bestimmten Zeit rein.

    function addUfoRechts(): void {
        let neu: Ufos = new UfosRechts(x, y, color, colorbody, colorAlien, status);
        ufos.push(neu);
        n++;
    }

    function addUfoLinks(): void {
        let neu: Ufos = new UfosLinks(x, y, color, colorbody, colorAlien, status);
        ufos.push(neu);
        n++;
    }
}
