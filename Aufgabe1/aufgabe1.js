//Aufgabe: Aufgabe1 - Tracetable
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 21.3.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
//
var num = 5;
for (let i = 0; i < num; i++) {
    let y = 0;
    let x = 0;
    let c;
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
    for (let a = 50; a > 0; a -= 20) {
        place(c, x, y, a);
        if (i == 4)
            break;
    }
}
function place(c, x, y, a) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    let s = div.style;
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
//# sourceMappingURL=aufgabe1.js.map