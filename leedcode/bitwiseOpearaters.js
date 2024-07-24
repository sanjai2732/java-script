let n="00000010001010111111111111111111"
let s=n.split("")
let count=0;
for(i=0;i<s.length;i++){
    if(s[i]>0)
        count++
}
console.log(count)

//another method
n="00001001000111".split('')
let arr=n.map(Number)
let count1=0
console.log(arr)
for(let i=0;i<arr.length;i++){
    count1+=arr[i]&1
    n>>1
}
console.log(count1)
