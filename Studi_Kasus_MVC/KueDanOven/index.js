// Cookie : Parent class
// Chocolate, Strawberry, Blueberry : Child class
// Oven : Factory class


// Parent class
class Cookie { 
    constructor(name, type, price){
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

// Child class
class Chocolate extends Cookie{
    constructor(name, price, isSweet){
        super(name, "Chocolate", price);
        this.isSweet = isSweet || false;
    }
}
class Strawberry extends Cookie{
    constructor(name, price, isSweet){
        super(name, "Strawberry", price);
        this.isSweet = isSweet || false;
    }
}
class Blueberry extends Cookie{
    constructor(name, price, isSweet){
        super(name, "Blueberry", price);
        this.isSweet = isSweet || false;
    }
}

// Factory class
class Oven { 
    constructor(container){
        this.container = container || [];
    }
    bake(cookie){
        this.container.push(cookie);
    }
    delivery(cookie_name){
        this.container = this.container.filter(cookie => cookie.name !== cookie_name);
    }
}

let oven = new Oven();
oven.bake(new Chocolate("Brownies", 100000));
oven.bake(new Strawberry("Red Violet", 400000));
oven.bake(new Blueberry("Blueberry Cake", 800000, true));
oven.delivery("Brownies");
console.log(oven.container);