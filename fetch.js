const chiave = "3819207b-2545-44f5-9bce-560b484b2f0f";
let result_get=[];

const SET = (chiave,value) => {
   console.log(value)
    fetch("https://ws.cipiaceinfo.it/cache/set", {
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
      fetch("https://ws.cipiaceinfo.it/cache/get", {
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
