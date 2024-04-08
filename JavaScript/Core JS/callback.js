const checkAge=async (age)=>{
let agePromise=new Promise((resolve,reject)=>{
     if(age>18){
        resolve("You can vote");
     } else {
        reject("You can not vote");
     }
})
 agePromise.then(success=>console.log(success)).catch(error=>console.log(error))
};
checkAge(12);