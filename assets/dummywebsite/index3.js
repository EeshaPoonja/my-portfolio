
var n = localStorage.getItem('key');
var numberOfItems = localStorage.length;
idu=localStorage.getItem("idu");
wel=document.querySelector(".welcome");
wel.innerHTML='welcome '+idu;
if(numberOfItems >1){
for(i=0;i<n;i++){
  
   document.querySelector(".init").style.display="none";

    const x1=localStorage.getItem('img'+idu+i);
    console.log(x1)
    const x2=localStorage.getItem('text'+idu+i);
    console.log(x2)
    const x3=localStorage.getItem('name'+idu+i);
    console.log(x3)
    const x4=localStorage.getItem('quan'+idu+i);
    console.log(x4)
    if(x2!=null){
    diva2 = document.createElement("div");
    const node12= document.createElement("img"); 
    node12.src="./assets/shop/"+x1+".png";  
    node12.style.height='30vh';
    node12.style.width='20vw';
    diva2.appendChild(node12);
   const textnode = document.createTextNode(x2+"/-");
   const textnode1 = document.createTextNode(' ordered**'+x4);
    diva2.appendChild(textnode);
    diva2.appendChild(textnode1);

  
   container2=document.querySelector(".addcart");
    container2.appendChild(diva2);
    }
}
}
else{
    document.querySelector(".init").style.display="block"; 
}
q=document.querySelector(".buttonc");
q.addEventListener('click',function(){
  for(i=0;i<n;i++){
    localStorage.removeItem('img'+idu+i);
    localStorage.removeItem('text'+idu+i);
    localStorage.removeItem('name'+idu+i);
    localStorage.removeItem('quan'+idu+i);
  }
//localStorage.clear();

localStorage.setItem('key',n);

})

