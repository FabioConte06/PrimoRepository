const createTable = (parentElement, data) => {
    let htmlTable = "<table>";
    htmlTable += data.map((row) => 
        "<tr>" + row.map((col) => 
            "<td>" + col + "</td>"
            ).join("")
        ).join("") + "</tr>";
    htmlTable += "</table>";
    parentElement.innerHTML = htmlTable;
    let newrow;
    return {
        render: (listadata) => {
            newrow.push(listadata);
            let Row = "";
            listadata.forEach((dato) => {
                let htmlRow = "<tr>" + dato.map(d => `<td>${d}</td>`).join('') + "</tr>";
                Row += htmlRow;
            }) 
            console.log(Row)
            table.innerHTML = header + Row + "</tbody></table>";
        }
    }
}

const table = createTable(document.querySelector("#table"), ["DATA", "SINGOLA", "DOPPIA", "SUITE"]);
table.render(["a", "b", "c", "d"]);

