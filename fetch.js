const chiave = "cfca9d05-1553-449d-ae62-172a341239b5";
let result_get=[];

const SET = (chiave,value) => {
   console.log(value)
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
   return new Promise((resolve,reject)=>{
      try{
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
         resolve(r.result);
      })
      }catch(error) {
         reject(error)
      }
   })   
}
const Aggiorna =(nuova_riga)=>{
   GET(chiave).then(result_get => {
      console.log(result_get);
      result_get.push(nuova_riga)
      console.log(result_get)
      SET(chiave,result_get)
   });
}
