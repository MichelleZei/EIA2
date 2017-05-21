namespace L8_fix {

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    window.addEventListener("load", init);

    // Variablen f�r die Bienen
    let bees: allBees[] = [];       // Bienen-Array

    var n: number = 10;         // Anzahl der Bienen
    let imgData: ImageData;     // Bildschirm wird aktualisiert

    // Variablen f�r die Blumen
    export let f: Flowers[] = [];
    var b: number = 15;         // Anzahl der Blumen
    //    let randomFlowerNumber: number;
    let x: number;
    let y: number;



    function init(_event: Event): void {


        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //  Funktionsaufrufe

        // Himmel
        crc2.fillStyle = "#A9D0F5";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Sand
        crc2.fillStyle = "#FE9A2E";
        crc2.fillRect(0, 400, canvas.width, 200);
        //Sonne
        drawSun(0, 0, "#FFFF00");
        console.log("Sonne");
        //Pyramide gro�
        drawPyramid1();
        console.log("Pyramide Gro�");
        //Pyramide klein
        drawPyramid2();
        console.log("Pyramide Gro�");
        // W�stensand
        drawGras();
        // Palmenstamm
        drawTribe(200, 480);
        drawTribe(200, 459);
        drawTribe(200, 434);
        drawTribe(200, 409);
        drawTribe(200, 384);
        drawTribe(200, 359);
        drawTribe(200, 334);
        drawTribe(200, 309);
        //Palmenbl�tter
        drawPalm();
        // Bienenkorb
        drawBasket();
        // Blumen vor Bienen und imgData hinter Blumen, nicht hinter Bienen, sonst werden Bienen auch mit abgespeichert
        //  ----------------------------  Blumen ----------------------------------------

        // neue Blume wird erstellt
        for (let i: number = 0; i < b; i++) { // zwei F�lle also mal zwei bei Math. random 
            let randomFlowerNumber: number = Math.floor((Math.random() * 2) + 0);

            // let randomNumber zw 0 1
            switch (randomFlowerNumber) {
                case 0:
                    let t: Tulip = new Tulip();
                    t.draw();
                    f.push(t);
                    break;

                case 1:
                    let l: Lollipop = new Lollipop(10);
                    l.draw();
                    f.push(l);
                    break;

                default:
                    break;
            }   // Ende switch


        }   // Ende for-Schleife
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // canvas speichern

        //  ----------------------------  Bienen ----------------------------------------

        // 10 normale Bienen zeichnen
        for (let i: number = 0; i < n; i++) {
            let b: normalBee = new normalBee(170, 400); // { x: 0, y: 0, color: " ", wingSize: 0 };
            bees.push(b);
        }

        // 10 Honigbienen zeichnen
        for (let i: number = 0; i < n; i++) {
            let h: HoneyBee = new HoneyBee(170, 400); // { x: 0, y: 0, color: " ", wingSize: 0 };
            h.draw();
            bees.push(h);
        }
        console.log(bees);

        //  ----------------------------  Bienen ----------------------------------------
        // Bienen fliegen lassen
        window.setTimeout(flyBees, 20);
        // Bei Klick hinzuf�gen
        canvas.addEventListener("click", clickCanvas);

    }   // ENDE INIT


    // Sonne
    function drawSun(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.arc(400, 60, 50, 0, 2 * Math.PI, false);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    // ### Pyramide 1 Gro� ### 
    function drawPyramid1(): void {
        crc2.beginPath();
        crc2.moveTo(50, 400);
        crc2.lineTo(150, 250);
        crc2.lineTo(250, 400);
        crc2.closePath();
        crc2.fillStyle = "#B45F04";
        crc2.fill();

    }

    // ### Pyramide 2 klein ### 
    function drawPyramid2(): void {
        crc2.beginPath();
        crc2.moveTo(230, 400);
        crc2.lineTo(280, 320);
        crc2.lineTo(330, 400);
        crc2.closePath();
        crc2.fillStyle = "#B45F04";
        crc2.fill();
    }

    // Gras

    function drawGras(): void {
        crc2.beginPath();
        crc2.moveTo(450, 480);
        crc2.bezierCurveTo(390, 440, 210, 440, 150, 480);
        crc2.bezierCurveTo(210, 590, 390, 590, 450, 480);
        crc2.closePath();
        crc2.strokeStyle = "#58FA58";
        crc2.fillStyle = "#58FA58";
        crc2.fill();
        crc2.stroke();
    }

    //Palmenstamm

    function drawTribe(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#8A2908";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y + 25);
        crc2.lineTo(_x + 50, _y);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();


    }

    // Palmenbl�tter
    function drawPalm(): void {
        crc2.beginPath();
        crc2.fillStyle = "#088A08";
        crc2.strokeStyle = "#0B610B";
        crc2.lineWidth = 1;
        crc2.moveTo(225, 309);
        //Blatt 1
        crc2.bezierCurveTo(270, 320, 310, 360, 290, 400);
        crc2.lineTo(225, 309);
        //Blatt 2
        crc2.bezierCurveTo(250, 300, 320, 290, 330, 330);
        crc2.lineTo(225, 309);
        //Blatt 3
        crc2.bezierCurveTo(220, 280, 290, 250, 320, 260);
        crc2.lineTo(225, 309);

        //Blatt 4
        crc2.bezierCurveTo(220, 270, 170, 250, 150, 265);
        crc2.lineTo(225, 309);

        //Blatt 5
        crc2.bezierCurveTo(185, 295, 135, 300, 125, 320);
        crc2.lineTo(225, 309);

        //Blatt 6
        crc2.bezierCurveTo(150, 330, 140, 360, 155, 375);
        crc2.lineTo(225, 309);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }




    // Bienenkorb
    function drawBasket(): void {

        crc2.beginPath();
        crc2.scale(1, 1.5);
        crc2.arc(170, 260, 25, 0, 2 * Math.PI, true);

        crc2.fillStyle = "#61210B";
        crc2.strokeStyle = "#61210B";
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(170, 267, 10, 0, 2 * Math.PI, true);
        crc2.setTransform(1, 0, 0, 1, 0, 0);
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }


    // Bienen fliegen lassen

    function flyBees(): void {

        crc2.putImageData(imgData, 0, 0); // Laden der Landschaft

        // in bees.length ge�ndert
        for (let i: number = 0; i < bees.length; i++) {

            let b: allBees = bees[i];


            if (b.x < 0 - 10) {          //Wenn sie nach links aus dem Fenster fliegen kommt sie rechts wieder rein

                b.x = canvas.width + 10;     // +10 ist der Radius der Biene, damit es einen flie�eden �bergang gibt
            }

            if (b.y > canvas.height) {     // Wenn die Bienen unten aus dem Bildschirmrand rausfliegen, fliegen sie oben wieder rein

                b.y = 0;
            }

            if (b.y < 0) {                // Wenn die Biene oben rausfliegt, kommt sie unten wieder raus
                b.y = canvas.height;
            }
            b.update();


        }

        window.setTimeout(flyBees, 20);

    }

    function clickCanvas(_event: Event): void {

        let newBee: allBees = new HoneyBee(170, 400); // es wird auf den constructor zugegriffen, der die beiden Parameter x und y verlangt        
        bees.push(newBee);
        n++;
    }
}