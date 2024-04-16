const print=(msg)=>{
    console.log(msg);
}
const sum=(num1,num2,print)=>{
    let s=num1+num2;
    print(s);
}
sum(20,30,function (sum){
    if(sum>20)
    {
        console.log("Greater than 20");
    } else {
        console.log("Less than 20");
    }
  
});