let PHOTO = document.getElementById("photo");

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

PHOTO.addEventListener("click",function(e)
{    
    if(document.querySelector("header h1").className == "claseColor1")
    {
        document.querySelector("header h1").className = "claseColor2";
    }
    else
    {
        document.querySelector("header h1").className = "claseColor1";
    }
    console.log(e.type);
    
})