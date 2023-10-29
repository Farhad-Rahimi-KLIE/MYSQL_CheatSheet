let s = reverseString("javascript");
console.log(s);
function reverseString(s){
 let s2 = "";
 for(let i=s.length-1; i>=0; i--){
  let char = s[i];
  s2 += char;
 }
 return s2;
}