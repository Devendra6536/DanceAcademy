function play(){
    var responsive = document.getElementById("navigation");
    if(responsive.className === "navbar")
    {
        responsive.className += " responsive";
    }
    else{
        responsive.className  = "navbar";
    }
}
function pause()
{
    document.getElementById("navigation").className = "navbar";
}