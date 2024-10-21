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
 
const table = createTable(document.querySelector("#table"), ["DATA", "SINGOLA", "DOPPIA", "SUITE"]);
table.render(["01/03/2025", "10", "5", "3"], ["02/03/2025", "10", "5", "3"], ["03/03/2025", "10", "5", "3"], ["04/03/2025", "10", "5", "3"], ["05/03/2025", "10", "5", "3"], ["06/03/2025", "10", "5", "3"]);