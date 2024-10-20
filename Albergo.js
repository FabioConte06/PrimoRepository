const createForm = (parentElement) => {
    let data;
    callback = null;

    return {
        setlabels: (labels) => {data = labels},
        submit: (callbackinput) => {callback = callbackinput},
        render: () => {
            parentElement.innerHTML = data.map((index) => {
                return `<div class="form-group">
<<<<<<< HEAD
                        ${index[0]}\n <input type="${index[1]}" id="#${index[0]}" class="form-control"/>
=======
                        ${index[0]}\n <input type="${index[1]}" id="${index[0]}" class="form-control"/>
>>>>>>> 67e8650c0a933413b095d9fb545854be71669c73
                        </div>`;
            }).join("\n") + `<button type="button" class="btn btn-primary" id="submit">SUBMIT</button>`;
            document.querySelector("#submit").onclick = () => {
                const result = data.map((index) => {
                    return document.querySelector(`#${index[0]}`).value;
                });
                console.log(result);
            }
            },
        };
    };

    const form = createForm(document.getElementById("form"));
    form.setlabels([["Data","date"], ["Singole","number"], ["Doppie","number"], ["Suite", "number"]]);
    form.submit = ((formData) => {
        console.log("Dati inviati", formData);
    })
    form.render();