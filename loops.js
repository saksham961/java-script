
// while 

let i = 12
while(i <= 120){
    console.log("i = ", i )
    i+=12
}  

// for-ofloop

let str = "saksham"
 for(let P of str){
    console.log("P=",P)
 }

 // for in loop 

let student = {
    name :"aayush",
    class :12,
    marks : 70,
    address : "delhi"
}  
for(let key in student ){
    console.log("keys =" , key , "values = ", student [key])
}