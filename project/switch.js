/*
chennai: population = 336565
         literacyRate = 90.20
         language = 'Tamil' 

Bengaluru: population = 4242555
         literacyRate = 88.20
         language = 'Kannada' 

Mumbai: population = 424249355
         literacyRate = 3984.20
         language = 'hindi'    

The Indian city of Bengaluru has a population  "4242555".language spoken is "Kannada" and literacy rate is "88.20%".
         
*/

const button=document.querySelector("button")
button.addEventListener("click",show)
let resultdiv=document.createElement('div')
resultdiv.id='result'
document.querySelector(".container").appendChild(resultdiv)
function show(){
    const input =document.querySelector("#input")
    const city=input.options[input.selectedIndex].value
    let population=0 ,literacyRate=0,language = ''
    switch(city){
    case 'chennai':
         population = 336565
         literacyRate = 90.20
         language = 'Tamil' 
         break
    case 'Bengaluru':
         population = 4242555
         literacyRate = 88.20
         language = 'Kannada' 
         break
    case 'Mumbai':
        population = 42425551165
        literacyRate = 525.0
        language = 'Hindi' 
    }
    let text=`The Indian city of ${city} has a population${population}.language spoken is ${language} and literacy rate is ${literacyRate}%.`
    document.getElementById('result').innerHTML=text
}
