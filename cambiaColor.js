document.getElementById("photo").onclick = function()
{
    var refColor = document.querySelector("h1").style.color
    
    if(refColor == "black")
    {
        document.querySelector("h1").style.color = "blue"
    }
    else
    {
        document.querySelector("h1").style.color = "black"
    }
}