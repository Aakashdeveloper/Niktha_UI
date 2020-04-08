var city = ["Delhi","London","Newyork"]

city.map((data) =>{console.log(data)})


var a =[2,4,6,8]
a.map((item) =>{ return item*3 })
[6,12,18,24]


var a = [18,34,22,21,19,43,15,31]
a.filter((data) => { return data>20})
(5) [34, 22, 21, 43, 31]


var a =[2,4,6,8]
a.map((item) =>{ return item>4 })
[6,12,18,24]
///////////

var a =[2,4,6,8]
a.map((item) =>{ return item>4 })
(4) [false, false, true, true]

var a =[2,4,6,8]
a.filter((item) =>{ return item*4 })
[2,4,6,8]




[0,1,2,3]
a.map((item) =>{ return item*2 })
[0,2,4,6]
a.filter((item) =>{ return item*2 })
[1,2,3]