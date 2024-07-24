document.addEventListener('DOMContentLoaded',function(){
const sub=document.getElementById('sub')
const add=document.getElementById('add')
let count=document.getElementById('countNumber')

let quantityCount=parseInt(count.textContent=1)
sub.addEventListener('click',()=>{
    if(quantityCount >1){
        quantityCount--
        count.textContent=quantityCount
    }
    let totelAmount=document.getElementById('totelAmount')
    let tot=parseInt(totelAmount.textContent=quantityCount*999)
    
});
add.addEventListener('click',()=>{
    let totelAmount=document.getElementById('totelAmount')
    quantityCount++
    count.textContent=quantityCount
    let tot=parseInt(totelAmount.textContent=quantityCount*999)
    

})



})




