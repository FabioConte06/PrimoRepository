const createForm = (parentElement) => {
    let data;
    callback = null;

    return {
        setlabels: (labels) => {data = labels},
        submit: (callbackinput) => {callback = callbackinput},
        render: () => {
            parentElement.innerHTML = data.map((date, singole, double, suite) => {
                return `<div class="form-group">${date}\n <input type="text" id="${date}" class="form-control"/></div>`+
                `<div class="form-group">${singole}\n <input type="text" id="${singole}" class="form-control"/></div>` +
                `<div class="form-group">${double}\n <input type="text" id="${double}" class="form-control"/></div>` +
                `<div class="form-group">${suite}\n <input type="text" id="${suite}" class="form-control"/></div>`;
            }).join("\n") + `<button type="button" class="btn btn-primary" id="submit">SUBMIT</button>`;
            document.querySelectorAll("#submit").onclick = () => {
                const result = data.map((name) => {
                    return document.querySelector("#" + name).value;
                });
                callback(result);
            }
            },
        };
    };