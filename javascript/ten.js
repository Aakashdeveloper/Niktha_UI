for
while
do while
for of
for in 
map 
filter



for(i=0;i<10;i++){
    console.log(i)
}

var movies =["Avengers","Death Race","Mad Max"]
for(i=0;i<movies.length;i++){
    console.log(movies[i])
}
Avengers
VM132:3 Death Race
VM132:3 Mad Max

/***********While**********/
var i = 0;

while(i<10){
    console.log(i)
    i++
}

/***********Do While**********/
var i =0;
do{
    console.log(i)
    i++
}
while(i<10)

var movies =["Avengers","Death Race","Mad Max"]
for(movie of movies){
    console.log(movie)
}