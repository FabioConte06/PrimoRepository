const createTable = (parentElement, data) => {
    console.log(data);
    let header = "<table class='table' border='1'><thead>";
    header += data.map(t => `<th>${t}</th>`).join("");
    header += "</thead><tbody>";
    parentElement.innerHTML = header;
    let newrow = [];
    return {
        render: (listadata) => {
            newrow.push(listadata);
            console.log(newrow);
            let Row = "";
            newrow.forEach((dato) => {
                let htmlRow = "<tr>" + dato.map(d => `<td>${d}</td>`).join('') + "</tr>";
                Row += htmlRow;
            }) 
            console.log(Row)
            parentElement.innerHTML = header + Row + "</tbody></table>";
        }
    }
}

const generadata = (inizio, giorni) => {
    const data = [];
    const date = new Date(inizio);

    for (let i = 0; i < giorni; i++) {
        const formato = date.toLocaleDateString('it-IT');
        data.push([formato, "10", "5", "3"]);
        date.setDate(date.getDate() + 1);
    }
    return data;
}
 
const table = createTable(document.querySelector("#table"), ["DATA", "SINGOLA", "DOPPIA", "SUITE"]);
const data = generaData("2025-03-01", 30);
table.render(data);


  
const createTableDisponiblità = (parentElement, data2) => {
    let header2 = "<table class='table' border='1'><thead>";
    header2 += data2.map(t => `<th>${t}</th>`).join("");
    header2 += "</thead><tbody>";
    parentElement.innerHTML = header2;
    let newrow2 = [];
    return {
        render: (listadata2) => {
            newrow2.push(listadata2);
            console.log(newrow2);
            let Row2 = "";
            newrow2.forEach((dato2) => {
                let htmlRow2 = "<tr>" + dato2.map(d => `<td>${d}</td>`).join('') + "</tr>";
                Row2 += htmlRow2;
            }) 
            console.log(Row2)
            parentElement.innerHTML = header2 + Row2 + "</tbody></table>";
        }
    }
  }
  
const tableDisponibilità = createTable(document.querySelector("#table2"), ["DATA", "SINGOLA", "DOPPIA", "SUITE"]);
tableDisponibilità.render(["a", "b", "c", "d"]);
