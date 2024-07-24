let iteam={
    name:'laptop',
    display:'fullHD',
    price:20000
}
console.log(iteam)
console.log(iteam.display)
//anther away object creation
let iteam2=new Object();
iteam2.price=50000
iteam2.Gpu='Rxt4030';-
console.log(iteam2)
console.log(iteam2.Gpu)
iteam2.display=`24'5 inch`
console.log(iteam2)
console.log(iteam2.display)

let mobile={
    imeNo:128273127837,
    price:300000,
    color:['red','black'],
    addCard(){
        console.log('Thank you')

    }
}
console.log(mobile.color[1])
mobile.addCard()