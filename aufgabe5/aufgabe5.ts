//Aufgabe: Aufgabe5 - Biene
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 26.4.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L5_Biene {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let a: number[] = [];
    let c: number[] = [];
    let n: number = 10;
    let imgData: ImageData; 
    
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        // Funktionen aufrufen, die gemalt werden sollen
        drawBackground(0, 0, "#98F5FF");
        drawSun(250, 30, "#ffff00");
        drawWiese(0, 170, "#228B22");
        drawMountain1(80, 170, "#888888", "#888888");
        drawMountain2(0, 170, "#888888", "#888888");
        drawIce1(116, 112, "#FFFFFF", "#FFFFFF");
        drawIce2(36, 92, "#FFFFFF", "#FFFFFF");
        drawFlower1(90, 250, "#005B14");
        drawFlower2(100, 280, "#005B14");
        drawFlower3(70, 270, "#005B14");
        drawBienenkorb(20, 190, "#E8AE00", "261C0E");
        
        // Zufallsblumen
        for (var i: number = 0; i < 30; i++) {
            var zufallszahlBlumen: number = ((Math.random() * 4) + 0);
            var b: number = Math.floor(zufallszahlBlumen);
            var x: number = (Math.random() * (canvas.width - 110) + 110);
            var y: number = (Math.random() * (canvas.height - 170) + 150);
            switch (b) {
                case 0:
                    drawFlower1(x, y, "#005B14");
                    break;

                case 1:
                    drawFlower2(x, y, "#005B14");
                    break;

                case 2:
                    drawFlower3(x, y, "#005B14");
                    break;

                default:
                    break;
            }
        }  
        
        // Koordinaten der ÷ffnung des Bienenkorbs
        imgData = crc2.getImageData(0, 0, 300, 300);
        for (let i: number = 0; i < n; i++) {
            a[i] = 25;
            c[i] = 210;
        }    
         window.setTimeout(animate, 20); 
        
        // Durch Klick auf den Canvas wird eine neue Biene hinzugef¸gt
        canvas.addEventListener("click", fuegeEineBieneDazu);                        
    }
    
    function drawBackground(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x, _y, 300, 170);
        crc2.moveTo(0, 0);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
    }
    function drawSun(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawWiese(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x, _y, 300, 300);
        crc2.moveTo(0, 0);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
    }
    function drawFlower1(_x: number, _y: number, _fillColor: string): void {
        // St‰ngel
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x, _y + 22);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        // Bl¸te
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.fillStyle = "white";
        crc2.moveTo(_x + 1, _y + 5);
        crc2.lineTo(_x + 15, _y + 17);
        crc2.lineTo(_x + 5, _y + 2);
        crc2.lineTo(_x + 23, _y - 1);
        crc2.lineTo(_x + 5, _y - 3);
        crc2.lineTo(_x + 18, _y - 18);
        crc2.lineTo(_x + 2, _y - 5);
        crc2.lineTo(_x + 1, _y - 23);
        crc2.lineTo(_x - 1, _y - 5);
        crc2.lineTo(_x - 17, _y - 18);
        crc2.lineTo(_x - 4, _y - 3);
        crc2.lineTo(_x - 22, _y - 1);
        crc2.lineTo(_x - 4, _y + 2);
        crc2.lineTo(_x - 14, _y + 17);
        crc2.lineTo(_x - 1, _y + 5);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        // Kreis in der Mitte
        crc2.beginPath();
        crc2.fillStyle = "#FF8C00";
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawFlower2(_x: number, _y: number, _fillColor: string): void {
        // St‰ngel
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x, _y + 40);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x + 1, _y + 40);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        // Bl¸te
        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        // Kreis in der Mitte
        crc2.beginPath();
        crc2.fillStyle = "#7C0000";
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawFlower3(_x: number, _y: number, _fillColor: string): void {
        // St‰ngel
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x, _y + 22);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        // Bl¸te
        crc2.beginPath();
        crc2.strokeStyle = "#7C0071";
        crc2.fillStyle = "#7C0071";
        crc2.arc(_x, _y - 3, 8, 0 * Math.PI, 1 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x - 8, _y - 2);
        crc2.lineTo(_x - 8, _y - 10);
        crc2.lineTo(_x - 3, _y - 2);
        crc2.lineTo(_x, _y - 10);
        crc2.lineTo(_x + 3, _y - 2);
        crc2.lineTo(_x + 8, _y - 10);
        crc2.lineTo(_x + 8, _y - 2);
        crc2.stroke();
        crc2.fill();
    }
    function drawMountain1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 50, _y - 80);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawIce1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 14, _y - 22);
        crc2.lineTo(_x + 28, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawMountain2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 60, _y - 130);
        crc2.lineTo(_x + 120, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawIce2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 24, _y - 52);
        crc2.lineTo(_x + 48, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBienenkorb(_x: number, _y: number, _fillColor: string, _strokeColor: string): void {
        //oberer Teil
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 25, 0, Math.PI, true);
        crc2.closePath();
        crc2.fill();
        //unterer Teil
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x - 25, _y, 50, 30);
        crc2.closePath();
        crc2.fill();
        //Bienenkorb ÷ffnung
        crc2.beginPath();
        crc2.strokeStyle = "#201500";
        crc2.fillStyle = "#201500";
        crc2.arc(25, 210, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawBiene(_x: number, _y: number, _fillColor: string, _strokeColor: string): void {
        //Fl¸gel
        crc2.beginPath();
        crc2.fillStyle = "#B9FFFF";
        crc2.arc(_x + 1, _y - 8, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#B9FFFF";
        crc2.arc(_x + 9, _y + 3, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Stachel
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x - 2, _y + 2);
        crc2.lineTo(_x, _y - 1);
        crc2.lineTo(_x + 1, _y + 1);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //Kˆrper
        //gelb
        crc2.beginPath();
        crc2.fillStyle = "#FFEF00";
        crc2.strokeStyle = "#FFEF00";
        crc2.moveTo(_x + 2, _y + 1);
        crc2.lineTo(_x, _y - 2);
        crc2.lineTo(_x + 1, _y - 3);
        crc2.lineTo(_x + 3, _y + 1);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //schwarz
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 2, _y - 4);
        crc2.lineTo(_x + 5, _y + 1);
        crc2.closePath();
        crc2.stroke();
        //gelb
        crc2.beginPath();
        crc2.strokeStyle = "#FFEF00";
        crc2.moveTo(_x + 3, _y - 5);
        crc2.lineTo(_x + 6, _y + 1);
        crc2.closePath();
        crc2.stroke();
        //schwarz
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 4, _y - 6);
        crc2.lineTo(_x + 7, _y);
        crc2.closePath();
        crc2.stroke();
        //gelb
        crc2.beginPath();
        crc2.strokeStyle = "#FFEF00";
        crc2.moveTo(_x + 5, _y - 7);
        crc2.lineTo(_x + 8, _y - 1);
        crc2.closePath();
        crc2.stroke();
        //Kopf
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x + 10, _y - 6, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //F¸hler
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 10, _y - 6);
        crc2.lineTo(_x + 9, _y - 15);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 13, _y - 6);
        crc2.lineTo(_x + 18, _y - 5);
        crc2.closePath();
        crc2.stroke();
    } 
    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        
        for (let i: number = 0; i < n; i++) {
            a[i] += Math.random() * 3 - 2;
            c[i] += Math.random() * 6 - 3;
            if ( a[i] < 0) {
                a[i] = 300;
            }
            if ( c[i] < 0) {
                c[i] = 300;    
            }
            drawBiene(a[i], c[i], "#000000", "#FFEF00");
        }
        window.setTimeout(animate, 20);
    }        
    // hinzuf¸gen der Bienen 
    function fuegeEineBieneDazu(): void {
        a.push(25);
        c.push(210);
        n++;
    }
}
