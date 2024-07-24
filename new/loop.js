//for loop
let i;
for(i=0;i<=5;i++){
    console.log(i)
}
 console.log("out of loop",i)

 //while loop
i=10
while(i>=1){
    console.log(i)
    i--;
}
//do while loop
i=0
do{
    console.log('hi')
    i++
}while(i==0)

//break
for(i=0;i<=5;i++){
    console.log(i)
   if(i==4)
    break
}

//continue -skips the current iteration
console.log('continue')
i=0
for(i=1;i<=10;i++){
    if(i%2==0)
        continue
    console.log(i)
}

//for ...of loop using array
let name=['sanjai','guru','naren']
for(i=0;i<name.length;i++){
    console.log(name[i].toUpperCase())
}

for(let na of name){
    console.log(na)
}

//for ..in loop using object
console.log("for in loop")

let iteam3={
    name:'laptop',
    display:'full hd',
    prise:200000
}
for( let key in iteam3){
    console.log(iteam3[key])
}
