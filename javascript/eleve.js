var a = ['a','b','c']
var b = [34,46,35,452,53]
var c = [true,false,false,true]

var myarray = [45,34,"35","ged",true,"f",4,false]

var city  = ['London','NewYork','Delhi','Amsterdam']


push => add at the end of Array
pop=> remove from the end of Array
shift=> remove for the first value of Array
unshift=> add at the begning of array

var city  = ['London','NewYork','Delhi','Amsterdam']
undefined
city.length
4
city.push('Helsinki')
5
city
(5) ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki"]
city.push('Dubai')
6
city
(6) ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai"]
var city = ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai"]
undefined
city.pop()
"Dubai"
city
(5) ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki"]
city.pop(4)
"Helsinki"
var city = ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai"]
undefined
city[city.length-1]
"Dubai"
city.unshift('Mumbai')
7
city
(7) ["Mumbai", "London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai"]
city.shift()
"Mumbai"

var city = ["Mumbai", "London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai"]
undefined
city.slice(2,5)
(3) ["NewYork", "Delhi", "Amsterdam"]
city
(7) ["Mumbai", "London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai"]
city.splice(2,0,'Paris','Boston')
[]
city
(9) ["Mumbai", "London", "Paris", "Boston", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai"]
city.splice(3,2)
(2) ["Boston", "NewYork"]
city
(7) ["Mumbai", "London", "Paris", "Delhi", "Amsterdam", "Helsinki", "Dubai"]
city.splice(3,1,'NewYork','Innsburg')
["Delhi"]
city
(8) ["Mumbai", "London", "Paris", "NewYork", "Innsburg", "Amsterdam", "Helsinki", "Dubai"]


var city = ["Mumbai", "London", "Paris", "NewYork", "Innsburg", "Amsterdam", "Helsinki", "Dubai"]
undefined
city.indexOf('Pune')
-1
city.indexOf('Delhi')
-1
city.indexOf('Newyork')
-1
city.indexOf('NewYork')
3
city.indexOf('Paris')
2

var test = ['a','b','c']
undefined
var test1 = [1,2,3]
undefined
test+test1
"a,b,c1,2,3"
test.concat(test1)
(6) ["a", "b", "c", 1, 2, 3]


var a = ['a','b','c',[1,2,3,['aa','bb'],'d'],'ff']


a[3][3][0]

var city = ["Mumbai", "London", "Paris", "NewYork", "Innsburg", "Amsterdam", "Helsinki", "Dubai"]
undefined
city.sort()
(8) ["Amsterdam", "Dubai", "Helsinki", "Innsburg", "London", "Mumbai", "NewYork", "Paris"]
city.reverse()
(8) ["Paris", "NewYork", "Mumbai", "London", "Innsburg", "Helsinki", "Dubai", "Amsterdam"]

