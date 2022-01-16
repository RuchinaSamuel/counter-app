const count = document.getElementById('count');

const increaseBtn= document.getElementById('increase');
const resetBtn= document.getElementById('reset');
const decreaseBtn= document.getElementById('decrease');

let countValue = 0;

increaseBtn.addEventListener("click",function(event){
 countValue += 1; 

 count.innerHTML= countValue; 
})


decreaseBtn.addEventListener("click",function(event){
    countValue -= 1; 
 
    count.innerHTML= countValue;  
   })

   resetBtn.addEventListener("click",function(event){
    countValue = 0;
   
    count.innerHTML= countValue;   
   })