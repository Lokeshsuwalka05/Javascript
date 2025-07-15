document.querySelector("#grandParent").addEventListener("click",(e)=>{
  console.log("grandParent Clicked");
 
},true)
document.querySelector("#parent").addEventListener("click",(e)=>{
  console.log("Parent Clicked");
   e.stopPropagation();
},true)
document.querySelector("#child").addEventListener("click",()=>{
  console.log("child Clicked");
},false)