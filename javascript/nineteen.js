function robot(name){
    this.name=name;
    this.legs = 2;
    this.color="White"
}


function human(name){
    this.name=name;
    this.city = 'London';
}


human.prototype = new robot()
var john = new human('john')
robot {name: undefined, legs: 2, color: "White"}
john
human {name: "john", city: "London"}
john.city
"London"
john.legs
2
john.color
"White"

//////////
class geo{
    constructor(lat,long){
        this.lat=lat;
        this.long=long
    }
}

class language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country
    }
}

var English = new language('English','UK')