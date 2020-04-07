var a = "john";
var a = "john";
undefined
a.toUpperCase()
"JOHN"
a.toLowerCase()
"john"
a.length
4
var d = "    tub   "
undefined
d.length
10
d.trim()
"tub"
d.trim().length
3

var a = "john";
undefined
a.slice(1)
"ohn"
a.slice(2,3)
"h"
a.slice(2,4)
"hn"
a.charAt(0)
"j"
a.charAt(1)
"o"

var a = "john";
a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()

var a = "john";
a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
"John"

var a ="hi i am doing JS"
a.replace(" ",'_')


var a ="hi i am doing JS"
a.replace(/ /g,'_')

"hi_i_am_doing_JS"
var a ="hi i am doing JS"
a.replace(/i/g,'I')

"hI I am doIng JS"
a.indexOf(i)
a.indexOf('i')
1
a.substr(1,3)
"i i"