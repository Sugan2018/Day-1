// call back

function box1(A) {
    setTimeout(() => {
        console.log("loading");
        A()
    },5000);
}
function box2(A) {
    setTimeout(() => {
        console.log("loading sucessfull");
        A()
    },1000);
}
function box3(A) {
    setTimeout(() => {
        console.log("finish");
    },1000);
}

box1(()=>{
    box2(()=>{
        box3()
    })
})

