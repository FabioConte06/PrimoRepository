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

const getDateKey = (date) => {
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
};

const defaultData = ["0", "0", "0"];
 
const table = createTable(document.querySelector("#table"), ["DATA", "SINGOLA", "DOPPIA", "SUITE"]);
const giorno = generaData(30);
table.render(giorno);

GET().then((dataReceived) => {
    data = dataReceived;
    const dataMonth = {};
    for (int = 0; i<30; i++) {
       date.setDate(date.getDate() + 1); 
       const key = getDateKey(date);
       if (!data[key]) {
              dataMonth[key] = defaultData;
      } else {
              dataMonth[key] = data[key];
      }
   }
   table.render();
 });