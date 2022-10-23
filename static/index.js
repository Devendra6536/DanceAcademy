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

setTimeout(sucessopen, 5000);
function sucessopen(){
    document.getElementById("success").style.display="block";
    document.getElementById("success_message").style.display="block";
    document.getElementById("process").style.display="none";
}