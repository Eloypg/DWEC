window.onload = function() {
    const form = document.getElementById("addForm");
    form.reset();
}

function readParagraph(){
    const emailRegex = /^[a-z][a-z0-9_.]*@[a-z]+\.[a-z]{2,3}$/;

    const email = document.getElementById("emailInput");
    const emailErrMsg = document.getElementById("emailErrMsg");
    const paragraphInput = document.getElementById("paragraphInput");

    if(!emailRegex.test(email.value)) {
        emailErrMsg.style.display = "inline";
        emailErrMsg.textContent = "*El email no es correcto";
    } else {
        emailErrMsg.style.display = "none";
        addParagraph(paragraphInput.value);
    }
}

function addParagraph(paragraphText) {
    const column1 = document.getElementById("column1");
    const column2 = document.getElementById("column2");

    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = `<strong>${paragraphText}</strong>`;
    newParagraph.style.color = "red";

    column1.appendChild(newParagraph);
    const cloneParagraph = newParagraph.cloneNode(true); //Clona el parrafo con su contenido
    cloneParagraph.style.color = "green";
    column2.appendChild(cloneParagraph);
}

document.getElementById("addButton").addEventListener("click", readParagraph);

window.onload = function(){
    var cookie = document.cookie;
    if(cookie != null && cookie != undefined) {
        if(cookie.length > 0){
            var seenCount = parseInt(cookie.split("=")[1]);
            seenCount++;
            document.cookie = `visited=${seenCount}`;
        }
    } else {
        document.cookie = "visited=1";
    }
}