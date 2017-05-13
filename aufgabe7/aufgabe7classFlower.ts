//Aufgabe: Aufgabe7 - Class Blumenwiese
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 9.5.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L7_Classes {
    export class Flower {
        x: number;
        y: number;
        fillColor: string;
        strokeColor: string;
        zufallszahlBlumen: number;    
        flowers: Flower[] = [];

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        setZufallsblume(): void {
            for (let i: number = 0; i < 30; i++) {
                this.zufallszahlBlumen = Math.floor((Math.random() * 4) + 0);
                this.x = (Math.random() * (canvas.width - 110) + 110);
                this.y = (Math.random() * (canvas.height - 170) + 150);
                switch (this.zufallszahlBlumen) {
                    case 0:
                        this.drawFlower1();
                        break;

                    case 1:
                        this.drawFlower2();
                        break;

                    case 2:
                        this.drawFlower3();
                        break;

                    default:
                        break;
                }
                this.flowers.push(new Flower(this.x, this.y));
            }
            console.log(this.flowers);
        }
        
        drawFlower1(): void {
            // St‰ngel
            crc2.beginPath();
            crc2.strokeStyle = "#005B14";
            crc2.fillStyle = "#005B14";
            crc2.moveTo(this.x, this.y + 22);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            // Bl¸te
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.moveTo(this.x + 1, this.y + 5);
            crc2.lineTo(this.x + 15, this.y + 17);
            crc2.lineTo(this.x + 5, this.y + 2);
            crc2.lineTo(this.x + 23, this.y - 1);
            crc2.lineTo(this.x + 5, this.y - 3);
            crc2.lineTo(this.x + 18, this.y - 18);
            crc2.lineTo(this.x + 2, this.y - 5);
            crc2.lineTo(this.x + 1, this.y - 23);
            crc2.lineTo(this.x - 1, this.y - 5);
            crc2.lineTo(this.x - 17, this.y - 18);
            crc2.lineTo(this.x - 4, this.y - 3);
            crc2.lineTo(this.x - 22, this.y - 1);
            crc2.lineTo(this.x - 4, this.y + 2);
            crc2.lineTo(this.x - 14, this.y + 17);
            crc2.lineTo(this.x - 1, this.y + 5);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            // Kreis in der Mitte
            crc2.beginPath();
            crc2.fillStyle = "#FF8C00";
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        drawFlower2(): void {
            // St‰ngel
            crc2.beginPath();
            crc2.strokeStyle = "#005B14";
            crc2.fillStyle = "#005B14";
            crc2.moveTo(this.x, this.y + 40);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = "#005B14";
            crc2.fillStyle = "#005B14";
            crc2.moveTo(this.x + 1, this.y + 40);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            // Bl¸te
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            // Kreis in der Mitte
            crc2.beginPath();
            crc2.fillStyle = "#7C0000";
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        drawFlower3(): void {
            // St‰ngel
            crc2.beginPath();
            crc2.strokeStyle = "#005B14";
            crc2.fillStyle = "#005B14";
            crc2.moveTo(this.x, this.y + 22);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            // Bl¸te
            crc2.beginPath();
            crc2.strokeStyle = "#7C0071";
            crc2.fillStyle = "#7C0071";
            crc2.arc(this.x, this.y - 3, 8, 0 * Math.PI, 1 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(this.x - 8, this.y - 2);
            crc2.lineTo(this.x - 8, this.y - 10);
            crc2.lineTo(this.x - 3, this.y - 2);
            crc2.lineTo(this.x, this.y - 10);
            crc2.lineTo(this.x + 3, this.y - 2);
            crc2.lineTo(this.x + 8, this.y - 10);
            crc2.lineTo(this.x + 8, this.y - 2);
            crc2.stroke();
            crc2.fill();
        }
    }
}
