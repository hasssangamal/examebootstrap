var navBar =document.querySelector(".navlost");

window.onscroll =function(){
   if(this.scrollY >=350){
    navBar.classList.add("showe");
    
   
   }else{
    navBar.classList.remove("showe");
   
   }

}