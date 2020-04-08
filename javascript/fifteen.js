//literal notation
//constructor notation

var country = {
    name:'India',
    capital:'Delhi',
    pop:1.33
}
undefined
country.name
"India"
country.capital
"Delhi"
country.pop
1.33
country.language="Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", pop: 1.33, language: "Hindi"}
country.pop = 1.32
1.32
country
{name: "India", capital: "Delhi", pop: 1.32, language: "Hindi"}
delete country.pop
true
country['name']
"India"
country['capital']
"Delhi"

var car = new Object()

var car = new Object()
undefined
car.color="red"
"red"
car.brand="bmw"
"bmw"
car
{color: "red", brand: "bmw"}

var sayHi ={
    firstnamee:'John',
    greet:function(){
        return "Hi To JavaScript"
    }
}

sayHi.firstnamee
"John"
sayHi.greet()
"Hi To JavaScript"

var calc={
    sum:(a,b)=> {return a+b},
    sub:(a,b) =>{return a-b}
}
undefined
calc.sub(5,2)
3
calc.sum(1,3)
4

