//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 18.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L8_Inheritance {
    export class HoneyBees extends Bienen {
        xTarget: number;
        yTarget: number;
        speed: number;
        random: number;

        constructor() {
            super();
            this.speed = 0.08;
            this.setTargetFlower();
        }

        setTargetFlower(): void {
            let targetflower: number = Math.round(Math.random() * (flowers.length - 1));
            this.xTarget = flowers[targetflower].x;
            this.yTarget = flowers[targetflower].y;
        }

        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.setTargetFlower();
            }
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (this.x == this.xTarget && this.y == this.yTarget) {
                this.setTargetFlower();    
            }
        }

        draw(): void {
            //Fl¸gel
            crc2.beginPath();
            crc2.fillStyle = this.colorFluegel;
            crc2.arc(this.x + 1, this.y - 8, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = this.colorFluegel; // "#B9FFFF"
            crc2.arc(this.x + 9, this.y + 3, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Stachel
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x - 2, this.y + 2);
            crc2.lineTo(this.x, this.y - 1);
            crc2.lineTo(this.x + 1, this.y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //Kˆrper
            //gelb
            crc2.beginPath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#ffff00";
            crc2.moveTo(this.x + 2, this.y + 1);
            crc2.lineTo(this.x, this.y - 2);
            crc2.lineTo(this.x + 1, this.y - 3);
            crc2.lineTo(this.x + 3, this.y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //schwarz
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 2, this.y - 4);
            crc2.lineTo(this.x + 5, this.y + 1);
            crc2.closePath();
            crc2.stroke();
            //gelb
            crc2.beginPath();
            crc2.strokeStyle = "#ffff00";
            crc2.moveTo(this.x + 3, this.y - 5);
            crc2.lineTo(this.x + 6, this.y + 1);
            crc2.closePath();
            crc2.stroke();
            //schwarz
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 4, this.y - 6);
            crc2.lineTo(this.x + 7, this.y);
            crc2.closePath();
            crc2.stroke();
            //gelb
            crc2.beginPath();
            crc2.strokeStyle = "#ffff00";
            crc2.moveTo(this.x + 5, this.y - 7);
            crc2.lineTo(this.x + 8, this.y - 1);
            crc2.closePath();
            crc2.stroke();

            //Kopf
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 10, this.y - 6, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //F¸hler
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 10, this.y - 6);
            crc2.lineTo(this.x + 9, this.y - 15);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 13, this.y - 6);
            crc2.lineTo(this.x + 18, this.y - 5);
            crc2.closePath();
            crc2.stroke();
        }
    }
}
