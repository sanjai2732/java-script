let s="anagram",t="anagram"
let ft=s.split('')
let sec=t.split('')
// console.log(ft,sec)
function finder(ft,sec){
    let map=new Map();
    if(ft.length!=sec.length)
        return false
    for(i=0;i<ft.length;i++){
        if(map[ft[i]]){//a flase ,n flase ,a true ,g flase ,r flase ,a true,m flase
            map[ft[i]]++ // a=3
        }
        else{
            map[ft[i]] =1 //a=1 n=1 g=1 r=1 m=1
        }
    }
    for(i=0;i<sec.length;i++){
        if(map[sec[i]]){// a true ,n true ,a true ,g true, r true ,a true ,m true
            map[sec[i]]-- //a-1=2 ,n-1=0, a 2-1=1 ,g-1=0 ,r-1=0,a 1-1=0,m-1=0
        }
        else
            return false //sec value is not match in fs value return "flase"
    }
    return true //all vlaue are match
   
}
console.log(finder(ft,sec))
//another method
let a="ram",b="ram"
let first=a.split('')
let second=b.split('')

function ok(first,second){
let map=new Map()
if(first.length != second.length){
    return false
}
first.forEach(value=>{
    if(map[[value]]){
        map[[value]]++
    }
    else{
        map[[value]]=1
    }
})
second.forEach(value=>{
    if(map[[value]]){
        map[[value]]--
    }
    else{
        return false
    }
})
return true
}
console.log(ok(first,second))