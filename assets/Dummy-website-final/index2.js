
let diva1=[];
var items=[{imgk:'img1',text:'rs 101'},{imgk:'img2',text:'rs 103'},
         {imgk:'img3',text:'rs 30'},{imgk:'img4',text:'rs 30'}]

const container = document.querySelector(".img-con");

for(i=0;i<items.length;i++){
    for(j=0;j<2;j++){
    diva1[i] = document.createElement("div");
    const node1= document.createElement("img"); 
    node1.src="./assets/shop"+items[i].imgk+".png";  
    node1.style.height='30vh';
    node1.style.width='20vw';
    diva1[i].appendChild(node1);
    const bnode=document.createElement("button");
    const ba=document.createElement("a");
    ba.href="./cart.html"
    ba.appendChild(bnode);
    const btextnode = document.createTextNode("ADD TO KART");
    bnode.appendChild(btextnode);
    const textnode = document.createTextNode(items[i].text);
    diva1[i].appendChild(textnode);
    diva1[i].appendChild(ba);
    container.appendChild(diva1[i]);
    
  
    }
    

}

