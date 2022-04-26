const rate=document.querySelectorAll(".value")
const input=document.getElementById("numberRating")
const feed=document.querySelector("#feed")
const rating= document.querySelector("#rating") 
const button=document.querySelector("button")

console.log(rating)

rate.forEach((number)=>{
  number.addEventListener('click',()=>{
    if(number.textContent){
   button.addEventListener("click",()=>{
      input.textContent=number.textContent;  
      rating.classList.add("hidden")
      feed.classList.remove("hidden")
        }) 
    }
    
    })  
})
