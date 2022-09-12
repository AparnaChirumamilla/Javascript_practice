function PromtUser() {
    var txt;
    var name = window.prompt("Enter name");
    if(name != null || name != ""){
        txt = "Hello " + name;
    }
    document.getElementById('name').innerHTML = txt;

}

