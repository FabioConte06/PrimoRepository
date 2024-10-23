const createForm = (parentElement) => {
    let data;
    callback = null;

    return {
        setlabels: (labels) => {data = labels},
        submit: (callbackinput) => {callback = callbackinput},
        render: () => {
            parentElement.innerHTML = data.map((index) => {
                return `<div class="form-group">
                        ${index[0]}\n <input type="${index[1]}" id="${index[0]}" class="form-control"/>
                        </div>`;
            }).join("\n") + `<button type="button" class="btn btn-primary" id="submit">SUBMIT</button>`;
            document.getElementById("submit").onclick = () => {
                const result =  {
                    date: document.getElementById("Data").value,
                    singole: document.getElementById("Singole").value,
                    doppie: document.getElementById("Doppie").value,
                    suite: document.getElementById("Suite").value
                };
                Booking(result);
                callback(result);
            }
            },
        };
    };

    const Booking = (result) => {
        const key = getDateKey(result.date);
        let available = defaultData;
        
        if (data[key]) {
            available = data[key];
        }
    
        if (result.singole > available[0] || result.doppie > available[1] || result.suite > available[2]) {
            alert("Camere non disponibili per la prenotazione.");
            return;
        }

        available[0] -= result.singole;
        available[1] -= result.doppie;
        available[2] -= result.suite;
        data[key] = available;
    
        save().then(() => {
            table.render();
        });
    };
    

    const form = createForm(document.getElementById("form"));
    form.setlabels([["Data","date"], ["Singole","number"], ["Doppie","number"], ["Suite", "number"]]);
    form.submit = ((formData) => {
        console.log("Dati inviati:", formData);
    })
    form.render();