const colortext=document.querySelector('.hex')
const btn=document.querySelector('button')
const warp=document.getElementById('warp')
let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',change)
    function change(){
    let hexcolour='#'
    for(let i=1;i<=6;i++){
        hexcolour +=randomHexvalue()

    }
    warp.style.backgroundColor=hexcolour
    colortext.innerHTML=hexcolour
    
    
    

}

function randomHexvalue(){
let math=Math.floor(Math.random()*16)
return hex[math]
  
}

