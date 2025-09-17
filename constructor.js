class car{
    constructor(brand,price,color){
        this.brand=brand
        this.price=price
        this.color=color
    }
    output(){console.log(`I need ${this.brand} car\nthe minimum of car price is ${this.price} \nthe car fully colored by blue`);
    }
}
const finaloutput = new car("Skoda","70 loaks","Red");
finaloutput.output()
 