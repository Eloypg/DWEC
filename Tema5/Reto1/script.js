function readParagraph() {
    let email = document.getElementById("emailInput")[0].value;
    const emailRegex = /^[a-z][a-z0-9\._%+\-]+@[a-z]+\.[a-z]{2,3}$/;
    const errorMensaje = document.getElementById("errorMessage")

    if(!email === null){
        if(!emailRegex.test(email)) {
            
        }
    } else {
        console.log("El email es null");
    }
    
    
}