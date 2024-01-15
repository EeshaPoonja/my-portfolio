

var h=document.querySelector(".dropdown");
var v=document.querySelectorAll(".dropdowncontent");

let t=0;
let z=0;
let s=0;

wel=document.querySelector(".welcome");
idu=localStorage.getItem("idu");
wel.innerHTML='welcome '+idu;

h.addEventListener('click',function(e){
console.log(e);
    if(t==0){
    for(i=0;i<v.length;i++){
    v[i].classList.add("finalPosition")
   
   
    }
    t=1;
  
   }
    else{
    for(i=0;i<v.length;i++){
        v[i].classList.remove("finalPosition")
       
        }
        t=0;
    }
 

    }

)
$(h).click(function(e){
    e.stopPropagation();
  });
$(document).click(function(){
    for(i=0;i<v.length;i++){
        v[i].classList.remove("finalPosition")
       
        }
        t=0;
  });
 
  const x1=localStorage.getItem('img'+0);
    console.log(x1)
    const x2=localStorage.getItem('text'+0);
    console.log(x2)


   var lg= document.querySelector(".lgo");
   lg.addEventListener("click",function(){
    localStorage.setItem("idu","");
   })
  /* var ser1= document.querySelector("#ser1");
   ser1.addEventListener('click',function(){var an1=prompt('search')});
   var ser= document.querySelector("#ser");
   ser.addEventListener('click',function(){var an2=prompt('search')});
*/