function mobcheck(){
    var m=document.forms["details"]["mob"].value
    if(isNaN(m))
    {
        window.alert("Please enter a valid phone number")
        document.getElementById("mob").value=""
    }
}


 