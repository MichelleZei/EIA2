//Aufgabe: Aufgabe9 - Eisdealer
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 28.5.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L9_Eisdealer {
    window.addEventListener("load", init);
    // abspeichern der verschiedenen Möglichkeiten in verschiedene Arrays
    let eissortenArray: string[] = ["Vanille", "Schoko", "Erdbeer", "Himbeer", "Zitrone", "Cookie", "Bueno", "Kinderschokolade", "Ferrero Roche"];
    let waffel: string[] = ["Becher", "Waffel"];
    let verzierung: string[] = ["Sahne", "Schoko Streusel", "bunte Streusel", "Schokosose"];
    // Arrays in denen alle inputs für die verschiedenen Zutaten untergebracht werden
    let inputEis: HTMLInputElement[] = [];
    let inputWaffel: HTMLInputElement[] = [];
    let inputVerzierung: HTMLInputElement[] = [];
    // das HTMLElement in dem alle Inputs für die verschiedenen Zutaten angeordnet werden sollen.
    let eissorten: HTMLElement;
    let waffeln: HTMLElement;
    let verzierungen: HTMLElement;
    // das HTMLElement, in dem die Bestellübersicht reingeschrieben wird
    let uebersichtBestellung: HTMLElement;
    // Variable für den Bestellbutton, um ihn klickbar zu machen
    let pruefenButton: HTMLElement;


    function init(): void {
        eissorten = document.getElementById("eis");
        verzierungen = document.getElementById("verzierung");
        waffeln = document.getElementById("waffel");
        uebersichtBestellung = document.getElementById("bestellung");
        pruefenButton = document.getElementById("button");

        createChoice(); // Funktion, die für jede Zutat entweder ein Input, eine Checkbox oder Radio erstellt, damit der Nutzer eine Auswahl treffen kann

        eissorten.addEventListener("change", change); // ruft change-Funktion auf
        verzierungen.addEventListener("change", change); // ruft change-Funktion auf
        waffeln.addEventListener("change", change); // ruft change-Funktion auf
        pruefenButton.addEventListener("click", pruefen); // ruft die klickbare pruefen-Funktion auf
    }

    function createChoice(): void {
        for (let i: number = 0; i < eissortenArray.length; i++) {
            createInput(eissortenArray[i]);
        }
        for (let i: number = 0; i < verzierung.length; i++) {
            createCheckbox(verzierung[i]);
        }
        for (let i: number = 0; i < waffel.length; i++) {
            createRadio(waffel[i]);
        }
    }

    function createInput(_eissorte: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _eissorte;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        label.id = _eissorte;

        eissorten.appendChild(label);
        inputEis.push(input);
    }

    function createCheckbox(_verzierung: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _verzierung;
        label.appendChild(input);
        input.type = "checkbox";
        label.id = _verzierung;

        verzierungen.appendChild(label);
        inputVerzierung.push(input);
    }

    function createRadio(_waffel: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _waffel;
        label.appendChild(input);
        input.type = "radio";
        input.name = "waffel";
        input.required = true;
        label.id = _waffel;

        waffeln.appendChild(label);
        inputWaffel.push(input);
    }

    function change(): void {
        let sum: number = 0;
        for (let i: number = 0; i < inputEis.length; i++) {
            sum += parseInt(inputEis[i].value); // Preis für ein Eis (1€) wird immer zur Summe hinzugerechnet/abgezogen, wenn die Zahl im Inputfeld verändert wird
        }
        for (let i: number = 0; i < inputVerzierung.length; i++) {
            if (inputVerzierung[i].checked) {
                sum += 0.4; // Preis für die Verzierung (40 cent) wird immer zur Summe hinzugerechnet/abgezogen, wenn eine der verschiedenen Verzierungen angeklickt wurde
            }
        }
        for (let i: number = 0; i < inputWaffel.length; i++) {
            if (inputWaffel[i].checked) {
                sum += 0.5; // Preis der Waffel (50 cent) wird immer zur Summe hinzugerechnet/abgezogen, wenn eine der zwei Waffeln angeklickt wurde
            }
        }
        changeBestellung(sum); // Funktion, in der die Gesamtsumme verändert wird
    }

    function changeBestellung(_sum: number): void {
        // ausgewählte Zutaten für das Eis werden in der Bestellübersicht mit dem jeweiligen Preis angezeigt
        let uebersichtBestellung: HTMLElement = document.getElementById("bestellung");
        uebersichtBestellung.innerText = "";
        
        for (let i: number = 0; i < inputEis.length; i++) {
            if (parseInt(inputEis[i].value) > 0) {
                uebersichtBestellung.innerText += eissortenArray[i] + " " + (parseInt(inputEis[i].value) * 1) + " Euro " + " \n";
            }
        }
        for (let i: number = 0; i < inputVerzierung.length; i++) {
            if (inputVerzierung[i].checked) {
                uebersichtBestellung.innerText += verzierung[i] + " 0,4 Euro" + " \n";
            }
        }
        for (let i: number = 0; i < inputWaffel.length; i++) {
            if (inputWaffel[i].checked) { 
                uebersichtBestellung.innerText += waffel[i] + " 0,5 Euro" + " \n";
            }
        }
        //Summe wird in die Übersicht im HTML-Teil reingeschrieben
        let sum: HTMLElement = document.getElementById("summe");
        sum.innerText = _sum.toString() + " Euro"; 
    }

    function pruefen(_event: Event): void {
        // alle inputs, die geprüft werden müssen, werden in einem Array gespeichert
        let inputs: HTMLInputElement[] = [];
        for (let i: number = 0; i < 5; i++) {
            let inputfelder: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName("bestellungpruefen")[i];
            inputs.push(inputfelder);
            console.log(inputfelder);
        }
        // jede Schublade in dem Array wird geprüft, ob sie richtig oder falsch ist
        for (let i: number = 0; i < inputs.length; i++) {
            console.log(inputs.length);
            // wenn sie falsch ist, muss die Bestellung nochmal überprüft werden
            if (inputs[i].validity.valid == false) {
                alert("Pruefe deine Bestellung nochmal!");
                location.reload();
            }
            // wenn sie richtig ist, wird die Bestellung aufgenommen
            else {
                alert("Vielen Dank für Ihre Bestellung!");
                location.reload();
            }
        }
    }
}