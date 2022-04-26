const rate=document.querySelectorAll(".value")
const input=document.getElementById("numberRating")
const feed=document.querySelector("#feed")
const rating= document.querySelector("#rating") 
const button=document.querySelector("button")

rate.forEach((number,index)=>{
  number.addEventListener('click',()=>{
    if(number.textContent==index+1){
      number.classList.toggle("clicked")
   button.addEventListener("click",()=>{
      input.textContent=number.textContent;  
      rating.classList.add("hidden")
      feed.classList.remove("hidden")
        }) 
    }
    
    })  
})
