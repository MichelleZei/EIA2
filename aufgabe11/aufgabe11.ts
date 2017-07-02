//Aufgabe: Aufgabe11 - Database
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 22.6.2017

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace DatabaseClient {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search); //Button klickbar machen
    }
    // wenn der Button search geklickt wurde, wird der Name und die Matrikelnummer unter query gespeichert und ein Request versendet
    function search(_event: Event): void {
        let inputName: HTMLInputElement = <HTMLInputElement>document.getElementById("searchname");
        let inputMatrikel: HTMLInputElement = <HTMLInputElement>document.getElementById("searchmatrikel");
        let query: string = "command=search";
        query += "&nameSearch=" + inputName.value;
        query += "&matrikelSearch=" + inputMatrikel.value;
        console.log(query);
        sendRequest(query, handleSearchResponse);
    }
    // wenn eine Response gekommen ist, wie sie verarbeitet/wie die Ausgabe aussehen soll
    function handleSearchResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
//        xhr.open("GET", "http://localhost:8100?" + _query, true);
        xhr.open("GET", "https://senddata11.herokuapp.com" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
}