let tab = [-10, 15, -56, 10, 14]
const positif = tab.filter(num => num>0)
//console.log(positif);
let final = 0;
for(let i=0; i>positif.length; i++){
  final += positif[i]
};
console.log(final);