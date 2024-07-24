// let input="abcabcbb"
// let output=3
//Explanation : The answer is "abc",with the length of 3.

let s="abcabcbb"
let n=s.split('')
let ans=[]
let map=new Map()
console.log(n)
for( i=0;i<n.length;i++){
    for(j=i+1;i<n.length;i+1){
        if(n[i]!=n[j]){
            console.log(n[i],n[j])
        }
        
    }
}
