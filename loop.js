// for loop

//syntax
// for (initialization , consition , iteration){};

for (let a = 1; a<=5; a++){
    console.log(a);
}

for (let a = 1; a<=5; a++){
    console.log("sugan");
}

// while loop

// syntax
// initialization
// while(condition){
// console.log
// iteration
// }

let b = 1;
while ( b<=5){
    console.log(b);
    b++
}

// do while

// syntax
// initialization
// do{
// log()
// iteration
// }while(condition)

let c = 1;
do{
    console.log(c);
    c++
}while (c<=5)
    


let c = 1;
do{
    console.log(c);
    c--
}while (c<=5)


// for of

let arr = ["java", 5464,545.55,true,null]

for (sap of arr){
    console.log(sap);
}


// for in

let obj ={
    name : "Sugan",
    place : "Koyembedu",
    City : "chennai",
    num : 6544
}

for (splt in obj){
    console.log(obj[splt]);

}

let obj = {
    name : "Sugan",
    place : "Koyembedu",
    City : "chennai",
}

for (splt in obj){
    console.log(splt+" : "+obj[splt]);

}
