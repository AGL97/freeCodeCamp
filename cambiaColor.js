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

<<<<<<< HEAD
PHOTO.addEventListener("click",function(e)
=======
/*
PHOTO.addEventListener("click",function()
>>>>>>> 4d8b5dcc7037fd0de1215c889ba343d8e0aa9b5b
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
    console.log(e.type);
    
})
*/

PHOTO.addEventListener("click",function()
{   
    
    var subt = document.querySelector("header h1");
    subt.classList.toggle("claseColor2");  

})