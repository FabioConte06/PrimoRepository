const createForm = (parentElement) => {
    let data;
    callback = null;

    return {
        setlabels: (labels) => {data = labels},
        submit: (callbackinput) => {callback = callbackinput},
        render: () => {
            
        }
    }
}