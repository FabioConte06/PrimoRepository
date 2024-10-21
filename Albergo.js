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
            submit.onclick = () => {
                const result = data.map((index) => {
                    return document.getElementById(index[0]).value;
                });
                table.render(result);
                callback(result);
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