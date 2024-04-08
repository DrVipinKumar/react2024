const msg=()=>console.log("Arrow Function");
let data=[10,20,50,60.56,70.2,"KIET",msg];
console.log(data);
data[6]();
data.forEach(value=>console.log(`Value of Array =${value}`));

// for (let value of data){
//     console.log(`Value of Array =${value}`);
// }
// for(let index in data){
//     console.log(`Value of ${index} is ${data[index]}`);
// }
// for(let i=0;i<data.length;i++){
//     console.log(`Value of ${i} is ${data[i]}`);
// }