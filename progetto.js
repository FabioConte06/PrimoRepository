const createTable = (parentElement, data) => {
    console.log(data);
    let header = "<table border='1'><thead>";
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
  table.render(["a", "b", "c", "d"]);
  
  