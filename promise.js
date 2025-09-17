// promise
// syntax
// return new promise ((resolve, rejcec) => {})


function scan() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const a = true;
            if(a){
             resolve("scan the QR")
            }
            else {
                reject("I am not scan the QR")
            }
        },5000);
    })
    
}

function payment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const b = false;
            if(b){
            resolve("Payment the amount")
            }
            else{
                reject("payment not paid")
            }
        },2000);
    })
}


function statu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const c = true;
            if(c){
                resolve("Blue Tick")
            }
            else{
                reject("Blue Tick")
            }
        },3000);
    })
}


//scan()
//.then(val1 => {console.log(val1); return payment()})
//.then(val1 => {console.log(val1); return statu()})
//.then(val1 => (console.log(val1)))

async function js() {
    try{
        const a = await scan()
        console.log(a);
        const b = await payment()
        console.log(b);
        const c = await statu()
        console.log(c);
    }catch (er) {
        console.log(er);
    }
    }
    js();

