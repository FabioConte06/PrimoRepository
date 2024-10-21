const createTable = (parentElement, data) => {
    console.log(data);
    let header = "<table class='table' border='1'><thead>";
    header += data.map(t => `<th>${t}</th>`).join("");
    header += "</thead><tbody>";
    parentElement.innerHTML = header;
    let newrow = [];
    return {
        render: (listadata) => {
            for (let i = 0; i < listadata.length; i++) {
                newrow.push(listadata[i]);
            }

            console.log(newrow);
            let Row = "";
            newrow.forEach((dato) => {
                let htmlRow = "<tr>" + dato.map(d => `<td>${d}</td>`).join('') + "</tr>" + "\n";
                Row += htmlRow;
            }) 
            console.log(Row)
            parentElement.innerHTML = header + Row + "</tbody></table>";
        }
    }
}

const generaData = (giorni) => {
    const giorno = [];
    const date = new Date();

    for (let i = 0; i < giorni; i++){
        const formato = date.toLocaleDateString("it-IT");
        giorno.push([formato, "10", "5", "3"]);
        date.setDate(date.getDate() + 1);
    }
    return giorno;
}
 
const table = createTable(document.querySelector("#table"), ["DATA", "SINGOLA", "DOPPIA", "SUITE"]);
const giorno = generaData(30);
table.render(giorno);