let num=[1,3,5]
const target=6;

//berte force
for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
       if(num[i]+num[j]==target){
        console.log([i,j])
       }
    }

}

//another method
let num1=[1,2,3,5,7,6,3]
let target1=13;
function two(num1,target1){
    let map=new Map();
    for(let i=0;i<num1.length;i++){
    let complement=target1-num1[i]
    if(map.has(complement)){
        return [map.get(complement),i]
    }
    map.set(num1[i],i)//index value
}
}
// let result=two(num1,target1)
// console.log(result)
console.log(two(num1,target1))