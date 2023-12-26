

var h=document.querySelector(".dropdown");
var v=document.querySelectorAll(".dropdowncontent");

let t=0;
let z=0;
let s=0;
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
 
