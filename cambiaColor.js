let PHOTO = document.querySelector("#photo");

/*
PHOTO.addEventListener("click",function()
{  
      
    if(document.querySelector("header h1").style.color == "black")
    {
        document.querySelector("header h1").style.color = "blue";
    }
    else
    {
        document.querySelector("header h1").style.color = "black";
    }

}) 
*/

/*
PHOTO.addEventListener("click",function()
{    
    
    var subt = document.querySelector("header h1");
    if(subt.classList.contains("claseColor1"))
    {
        subt.classList.remove("claseColor1");
        subt.classList.add("claseColor2");
    }
    else
    {
        subt.classList.remove("claseColor2");
        subt.classList.add("claseColor1");
    }
    
})
*/

PHOTO.addEventListener("click",function()
{   
    
    var subt = document.querySelector("header h1");
    subt.classList.toggle("claseColor2");  

})