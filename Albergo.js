const createForm = (parentElement) => {
    let data;
    callback = null;

    return {
        setlabels: (labels) => {data = labels},
        submit: (callbackinput) => {callback = callbackinput},
        render: () => {
            parentElement.innerHTML = data.map((index) => {
                return `<div class="form-group">
                        ${index}\n <input type="date" id="${index}" class="form-control"/>
                        </div>`;
            }).join("\n") + `<button type="button" class="btn btn-primary" id="submit">SUBMIT</button>`;
            document.querySelectorAll("#submit").onclick = () => {
                const result = data.map((index) => {
                    return document.querySelector("#" + index).value;
                });
                callback(result);
            }
            },
        };
    };