// settimeout

// syntax
// setTimeout(() => {}, timeout);


function box1() {
    setTimeout(() => {
        console.log("loading");
    },5000);
}
function box2() {
    setTimeout(() => {
        console.log("loding sucessful");
    },1000);
}
box1()
box2()

