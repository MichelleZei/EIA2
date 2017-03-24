//Aufgabe: Aufgabe1 - Tracetable
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 21.3.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
//

var num: number = 5;
for (let i: number = 0; i < num; i++) {
    let y: number = 0;
    let x: number = 0;
    let c: string;
    y += (i == 2) ? 20 : 50;
    x = (x + 170) % 400;
    switch (i) {
        case 0:
            c = "#ff0000";
            break;
        case 1:
        case 4:
            c = "#00ff00";
            break;
        case 3:
            continue;
        default:
            c = "#0000ff";
    }
    for (let a: number = 50; a > 0; a -= 20) {
        place(c, x, y, a);
        if (i == 4)
            break;
    }
}

function place(c: string, x: number, y: number, a: number): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);

    let s: CSSStyleDeclaration = div.style;
    s.borderStyle = "solid";
    s.borderColor = "#000000";
    s.borderWidth = "1px";
    s.position = "absolute";
    s.display = "inline-block";
    s.backgroundColor = c;
    s.width = a + "px";
    s.height = a + "px";
    s.left = x + "px";
    s.top = y + "px";
}