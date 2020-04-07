//function

var a = 10
var b = 20
a+b

function add(a,b){
    return a+b
}
add(1,2)
3
add('a','b')
"ab"


//es5
function isEven(userInput){
    var out =''
    if(userInput%2==0){
        out="Even"
    }else{
        out="Odd"
    }

    return out;
}
undefined
isEven(22)
"Even"
isEven(23)
"Odd"

//es6
var isEven = (userInput) => {
    var out =''
    if(userInput%2==0){
        out="Even"
    }else{
        out="Odd"
    }

    return out;
}