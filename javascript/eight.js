Date()
"Mon Apr 06 2020 04:53:59 GMT+0100 (British Summer Time)"
var mydate = new Date()
undefined
mydate.getDate()
6
mydate.getDay()
1
mydate.getTime()
1586145259031
mydate.getHours()
4

var name = 'John'
switch(name){
    case 'aakash':
        console.log('You are user')
        break;
    case 'John':
        console.log('You are admin user')
        break;
    default:
        console.log('I Dont know')
}

switch(new Date().getDay()){
    case 0:
        console.log('Its sunday')
        break;
    case 1:
        console.log('Its Monday')
        break;
    default:
        console.log('I Dont know')
}

localStorage.setItem('token','eeerg')
undefined
localStorage.getItem('token')
"eeerg"
localStorage.removeItem('token')
undefined
localStorage.getItem('token')
null