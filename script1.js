var select = document.getElementById('site');

document.getElementById("button").onclick = function(){
    var value = select.value
    if (value == "Google")
    {
        window.location.href = "https://www.google.com/";
    }
    else if (value == "Yahoo")
    {
        window.location.href = "https://www.yahoo.com/";
    }
    else if (value == "MSN")
    {
        window.location.href = "https://www.msn.com/";
    }
};