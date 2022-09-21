function Palindrome(num){

let n= num.toString();
let bag="";
for(let i=n.length-1; i>=0; i--){
    bag=bag+n[i];
    
}
if(bag==n){
    console.log("Yes");
}else{
    console.log("No");
}
}
Palindrome(1221);