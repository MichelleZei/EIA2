//Aufgabe: Aufgabe10 - Eisdealer Erweiterung
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 22.6.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L10_EisdealerErweitert;
(function (L10_EisdealerErweitert) {
    window.addEventListener("load", init);
    // abspeichern der verschiedenen M�glichkeiten in verschiedene Arrays
    let eissortenArray = ["Vanille", "Schoko", "Erdbeer", "Himbeer", "Zitrone", "Cookie", "Bueno", "Kinderschokolade", "Ferrero Roche"];
    let waffel = ["Becher", "Waffel"];
    let verzierung = ["Sahne", "Schoko Streusel", "bunte Streusel", "Schokosose"];
    // Arrays in denen alle inputs f�r die verschiedenen Zutaten untergebracht werden
    let inputEis = [];
    let inputWaffel = [];
    let inputVerzierung = [];
    // das HTMLElement in dem alle Inputs f�r die verschiedenen Zutaten angeordnet werden sollen.
    let eissorten;
    let waffeln;
    let verzierungen;
    // das HTMLElement, in dem die Bestell�bersicht reingeschrieben wird
    let uebersichtBestellung;
    // Variable f�r den Bestellbutton, um ihn klickbar zu machen
    let pruefenButton;
    function init() {
        eissorten = document.getElementById("eis");
        verzierungen = document.getElementById("verzierung");
        waffeln = document.getElementById("waffel");
        uebersichtBestellung = document.getElementById("bestellung");
        pruefenButton = document.getElementById("button");
        createChoice(); // Funktion, die f�r jede Zutat entweder ein Input, eine Checkbox oder Radio erstellt, damit der Nutzer eine Auswahl treffen kann
        eissorten.addEventListener("change", change); // ruft change-Funktion auf
        verzierungen.addEventListener("change", change); // ruft change-Funktion auf
        waffeln.addEventListener("change", change); // ruft change-Funktion auf
        pruefenButton.addEventListener("click", pruefen); // ruft die klickbare pruefen-Funktion auf
    }
    function createChoice() {
        for (let i = 0; i < eissortenArray.length; i++) {
            createInput(eissortenArray[i]);
        }
        for (let i = 0; i < verzierung.length; i++) {
            createCheckbox(verzierung[i]);
        }
        for (let i = 0; i < waffel.length; i++) {
            createRadio(waffel[i]);
        }
    }
    function createInput(_eissorte) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _eissorte;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        label.id = _eissorte;
        eissorten.appendChild(label);
        inputEis.push(input);
    }
    function createCheckbox(_verzierung) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _verzierung;
        label.appendChild(input);
        input.type = "checkbox";
        label.id = _verzierung;
        verzierungen.appendChild(label);
        inputVerzierung.push(input);
    }
    function createRadio(_waffel) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _waffel;
        label.appendChild(input);
        input.type = "radio";
        input.name = "waffel";
        input.required = true;
        label.id = _waffel;
        waffeln.appendChild(label);
        inputWaffel.push(input);
    }
    function change() {
        let sum = 0;
        for (let i = 0; i < inputEis.length; i++) {
            sum += parseInt(inputEis[i].value); // Preis f�r ein Eis (1�) wird immer zur Summe hinzugerechnet/abgezogen, wenn die Zahl im Inputfeld ver�ndert wird
        }
        for (let i = 0; i < inputVerzierung.length; i++) {
            if (inputVerzierung[i].checked) {
                sum += 0.4; // Preis f�r die Verzierung (40 cent) wird immer zur Summe hinzugerechnet/abgezogen, wenn eine der verschiedenen Verzierungen angeklickt wurde
            }
        }
        for (let i = 0; i < inputWaffel.length; i++) {
            if (inputWaffel[i].checked) {
                sum += 0.5; // Preis der Waffel (50 cent) wird immer zur Summe hinzugerechnet/abgezogen, wenn eine der zwei Waffeln angeklickt wurde
            }
        }
        changeBestellung(sum); // Funktion, in der die Gesamtsumme ver�ndert wird
    }
    function changeBestellung(_sum) {
        // ausgew�hlte Zutaten f�r das Eis werden in der Bestell�bersicht mit dem jeweiligen Preis angezeigt
        let uebersichtBestellung = document.getElementById("bestellung");
        uebersichtBestellung.innerText = "";
        for (let i = 0; i < inputEis.length; i++) {
            if (parseInt(inputEis[i].value) > 0) {
                uebersichtBestellung.innerText += eissortenArray[i] + " " + (parseInt(inputEis[i].value) * 1) + " Euro " + " \n";
            }
        }
        for (let i = 0; i < inputVerzierung.length; i++) {
            if (inputVerzierung[i].checked) {
                uebersichtBestellung.innerText += verzierung[i] + " 0,4 Euro" + " \n";
            }
        }
        for (let i = 0; i < inputWaffel.length; i++) {
            if (inputWaffel[i].checked) {
                uebersichtBestellung.innerText += waffel[i] + " 0,5 Euro" + " \n";
            }
        }
        //Summe wird in die �bersicht im HTML-Teil reingeschrieben
        let sum = document.getElementById("summe");
        sum.innerText = _sum.toString() + " Euro";
    }
    function pruefen(_event) {
        // alle inputs, die gepr�ft werden m�ssen, werden in einem Array gespeichert
        let inputs = [];
        for (let i = 0; i < 5; i++) {
            let inputfelder = document.getElementsByClassName("bestellungpruefen")[i];
            inputs.push(inputfelder);
            console.log(inputfelder);
        }
        // jede Schublade in dem Array wird gepr�ft, ob sie richtig oder falsch ist
        for (let i = 0; i < inputs.length; i++) {
            console.log(inputs.length);
            // wenn sie falsch ist, muss die Bestellung nochmal �berpr�ft werden
            if (inputs[i].validity.valid == false) {
                alert("Pruefe deine Bestellung nochmal!");
                location.reload();
            }
            else {
                alert("Vielen Dank f�r Ihre Bestellung!");
            }
        }
    }
})(L10_EisdealerErweitert || (L10_EisdealerErweitert = {}));
//# sourceMappingURL=aufgabe11.js.map