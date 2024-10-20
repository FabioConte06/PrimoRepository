const chiave = "cfca9d05-1553-449d-ae62-172a341239b5"

const SET = (chiave,value) => {
    fetch("https://ws.progettimolinari.it/cache/set", {
        headers: {
           'Content-Type': 'application/json',
           'key': chiave
        },
        method: "POST",
        body: JSON.stringify({
           key: "Hotel",
           value: value
        })
     }).then(r => r.json())
     .then(r => {
        console.log(r.result);
     })
     .catch(r => {
        console.log(r.result);
     })
}

const GET = (chiave) => {
    fetch("https://ws.progettimolinari.it/cache/get", {
        headers: {
           'Content-Type': 'application/json',
           'key': chiave
        },
        method: "POST",
        body: JSON.stringify({
           key: "Hotel"
        })
     }).then(r => r.json())
     .then(r => {
        console.log(r.result);
     })
     .catch(r => {
        console.log(r.result);
     })
}
SET(chiave,[1,9,3,4])
GET(chiave)
