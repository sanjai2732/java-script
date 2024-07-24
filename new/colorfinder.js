//hex code='16'
let btn=document.querySelector("button")
btn.addEventListener('click',hexcodeGet)


function hexcodeGet(){
    let hex=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f']
    let i,color=[];
    for(i=0;i<=5;i++){
    let random = Math.round(Math.random()*15)
    color+=hex[random]
    }
    let topcode=document.getElementById('hexcode')
    topcode.innerHTML=`#${color}`
    let bg=document.getElementById('container')
    bg.style.backgroundColor=`#${color}`

}








