var bob = new Object()
bob.age = 10;
bob.city = "NewYork",
bob.setAge = function(newAge){
    bob.age= newAge
}

var tony = new Object()
tony.age = 25;
tony.city = "London",
tony.setAge = function(newAge){
    tony.age= newAge
}

let createage = function(newAge){
    this.age= newAge
}

var bob = new Object()
bob.age = 10;
bob.city = "NewYork",
bob.setAge = createage;

var tony = new Object()
tony.age = 25;
tony.city = "London",
tony.setAge = createage


function database(){
    this.find = (table) => {return `Select * from ${table}`},
    this.marks=(table,name) => {return `Select * from ${table} where name=${name}`}
}


var john = new database();
john.find('studnet')