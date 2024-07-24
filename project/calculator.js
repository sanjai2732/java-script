const button=document.querySelector('button')
button.addEventListener('click',cal)
let resultdiv=document.createElement('div')
resultdiv.id='result'
let container=document.querySelector(".container").appendChild(resultdiv)

function cal(){
    const input=(document.querySelector("#input").value)
    let operands=input.split(/[\+\-\*\/]/)
    let operator=input.match(/[\+\-\*\/]/)
    let ans=0
    switch(operator[0]){
        case '+':
            ans=parseFloat(operands[0])+parseFloat(operands[1]) //parseInt used convert string to Int
            break;
        case '-':
            ans=parseFloat(operands[0])-parseFloat(operands[1])
            break
        case '/':
            ans=parseFloat(operands[0])/parseFloat(operands[1])
            break
        case '*':
            ans=parseFloat(operands[0])*parseFloat(operands[1]) 
    }
    const result=document.querySelector("#result")
    result.innerHTML=ans
    
}