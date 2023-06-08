function login(form){
    if(form.u.value=="andres"){
        if(form.c.value=="123"){
            location="principal.html";
        } else {
            alert("error en password");
        }
    } else {
        alert("error de usuario");
    }
}